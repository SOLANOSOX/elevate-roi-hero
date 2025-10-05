import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Loader2 } from "lucide-react";

// =============================================================
// MOCK COMPONENTS (Para tornar o código self-contained e executável)
// Em um projeto real, você usaria seus componentes shadcn/ui.
// =============================================================

// Mock de useToast
const useToast = () => ({
  toast: ({ title, description, variant = "default" }) => {
    console.log(`[TOAST - ${variant.toUpperCase()}] ${title}: ${description}`);
    // No ambiente Canvas, você usaria um modal customizado ou logaria.
    // Em um navegador real, você renderizaria um Toast.
  },
});

// Mock de Botões, Inputs e Labels
const Button = ({ children, className = "", disabled, type = "button", ...props }) => (
  <button
    type={type}
    disabled={disabled}
    className={`px-4 py-2 font-semibold rounded-lg transition duration-200 ease-in-out ${className}`}
    style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = "", type = "text", placeholder, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    {...props}
  />
);

const Label = ({ children, className = "", ...props }) => (
  <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...props}>
    {children}
  </label>
);

// Mock de Dialog (Modal simples)
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg mx-auto bg-white p-6 rounded-xl shadow-2xl transition-all transform scale-100 opacity-100">
        {children}
        <button
          onClick={onOpenChange}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
const DialogContent = ({ children, className = "" }) => <div className={`mt-4 ${className}`}>{children}</div>;
const DialogHeader = ({ children, className = "" }) => <div className={`border-b pb-4 ${className}`}>{children}</div>;
const DialogTitle = ({ children, className = "" }) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;


// Mocks para Select
const Select = ({ onValueChange, defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue || "");
  const handleChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };
  return (
    <select
      value={value}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
    >
      {children}
    </select>
  );
};
const SelectTrigger = ({ children, className = "" }) => <div className={`p-2 border rounded-md ${className}`}>{children}</div>;
const SelectValue = ({ placeholder }) => <option value="" disabled>{placeholder}</option>;
const SelectContent = ({ children }) => <>{children}</>;
const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;


// Mocks para react-hook-form helpers
const Form = ({ children, ...props }) => <div {...props}>{children}</div>;
const FormField = ({ control, name, render }) => {
  // Usando um mock simples para formState.error aqui.
  const { register, formState: { errors } } = useForm();
  const error = errors[name];
  return render({
    field: { name, onChange: (e) => { console.log(name, e.target.value); }, onBlur: () => {}, value: '', ref: () => {} }, // Simplificado
    formState: { error }
  });
};
const FormItem = ({ children }) => <div className="space-y-1">{children}</div>;
const FormLabel = ({ children, className }) => <Label className={className}>{children}</Label>;
const FormControl = ({ children }) => <>{children}</>;
const FormMessage = ({ error }) => error ? <p className="text-sm text-red-500 mt-1">{error.message}</p> : null;

// =============================================================
// 1. SCHEMA DE VALIDAÇÃO ZOD ATUALIZADO
// =============================================================
const formSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  celular: z.string().min(1, "Celular/WhatsApp é obrigatório"),
  tipoUsuario: z.string().min(1, "Selecione uma opção"),
});

// Definimos um tipo para os dados do formulário
type FormInputs = z.infer<typeof formSchema>;

// Tipo para o payload completo enviado ao webhook (incluindo dados injetados)
type WebhookPayload = FormInputs & {
  fbp?: string;
  fbc?: string;
  pageUrl?: string; // Novo
  utmSource?: string; // Novo
  utmMedium?: string; // Novo
  utmCampaign?: string; // Novo
  utmContent?: string; // Novo
  utmTerm?: string; // Novo
};


interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// =============================================================
// HELPER PARA EXTRAIR COOKIES _fbp e _fbc
// =============================================================
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const cookieMatch = document.cookie.split('; ').find(row => row.trim().startsWith(name + '='));
  return cookieMatch ? cookieMatch.split('=')[1] : undefined;
};

// =============================================================
// HELPER PARA EXTRAIR URL E UTMS (COM DIAGNÓSTICO)
// =============================================================
const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  try {
    const url = window.location.href;
    const search = window.location.search;
    
    // --- NOVO: LOG DE DIAGNÓSTICO ---
    console.log("DIAGNÓSTICO URL:", { url, search });
    
    const urlParams = new URLSearchParams(search);
    const utm_data = {
      pageUrl: url,
      utmSource: urlParams.get('utm_source') || '',
      utmMedium: urlParams.get('utm_medium') || '',
      utmCampaign: urlParams.get('utm_campaign') || '',
      utmContent: urlParams.get('utm_content') || '',
      utmTerm: urlParams.get('utm_term') || '',
    };

    console.log("DIAGNÓSTICO UTMs Capturados:", utm_data);
    return utm_data;
    
  } catch (e) {
    console.error("Erro ao extrair parâmetros UTM:", e);
    return { pageUrl: typeof window !== 'undefined' ? window.location.href : 'N/A' };
  }
};


const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      celular: "",
      tipoUsuario: "",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);

    // 1. Construir URL do checkout com os dados do usuário
    const checkoutUrl = new URL("https://pay.hub.la/RromdlJcDyVt11ii3CQB");

    // Configurado para enviar apenas Nome e Email
    checkoutUrl.searchParams.append("name", data.nomeCompleto);
    checkoutUrl.searchParams.append("email", data.email);
    checkoutUrl.searchParams.append("phone", data.celular);

    // 2. Extrair fbp e fbc dos cookies
    const fbp = getCookie('_fbp') || "";
    const fbc = getCookie('_fbc') || "";

    // 3. Extrair URL e UTMs
    const utms = getUTMParams();

    // 4. Criar o payload completo para o webhook, incluindo os cookies, URL e UTMs
    const webhookData: WebhookPayload = {
        ...data,
        fbp,
        fbc,
        ...utms, // Adiciona pageUrl, utmSource, etc.
    };

    let webhookSuccess = false;

    try {
      console.log("Payload final para o webhook:", webhookData);

      // 5. Enviar dados para o webhook com timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.warn("Timeout do webhook (10s) - abortando requisição.");
      }, 10000); // 10 segundos timeout

      const webhookResponse = await fetch("https://hook.us1.make.com/2i60eeice22097x3a3ruxhwpslucmnga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData), // Envia o payload completo
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("Resposta do webhook:", webhookResponse.status, webhookResponse.statusText);

      if (webhookResponse.ok) {
        webhookSuccess = true;
        console.log("Webhook enviado com sucesso");
      } else {
        console.warn("Webhook retornou erro:", webhookResponse.status, webhookResponse.statusText);
      }

    } catch (error) {
      console.error("Erro ao enviar para webhook:", error);
      if (error.name === 'AbortError') {
        console.warn("Timeout do webhook - continuando com checkout");
      }
    }

    // 6. Sempre redirecionar para o checkout, independente do webhook
    try {
      toast({
        title: webhookSuccess ? "Sucesso!" : "Redirecionando...",
        description: webhookSuccess
          ? "Dados enviados para o CRM. Redirecionando para o checkout..."
          : "Não foi possível conectar ao CRM, mas estamos te redirecionando para o checkout.",
        variant: webhookSuccess ? "default" : "destructive",
      });

      // Fechar modal e redirecionar após um breve delay
      setTimeout(() => {
        onClose();
        // Redireciona na mesma guia (window.location.href)
        window.location.href = checkoutUrl.toString();
      }, 1000);

    } catch (error) {
      console.error("Erro ao processar checkout:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado ao tentar redirecionar.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white border-gray-200 max-h-[90vh] overflow-y-auto p-8 rounded-xl shadow-lg">
        <DialogHeader className="relative pb-4 border-b border-gray-100">
          <DialogTitle className="text-center text-xl md:text-2xl font-extrabold text-blue-600">
            Garanta seu acesso!
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm md:text-base mt-1">
            INSIRA SEUS DADOS ABAIXO PARA CONTINUAR
          </p>
        </DialogHeader>

        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">

            {/* Nome Completo */}
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-semibold">
                    Nome Completo <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage error={formState.error} />
                </FormItem>
              )}
            />

            {/* E-mail */}
            <FormField
              control={form.control}
              name="email"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-semibold">
                    E-mail <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage error={formState.error} />
                </FormItem>
              )}
            />

            {/* Celular/WhatsApp */}
            <FormField
              control={form.control}
              name="celular"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-semibold">
                    Celular/WhatsApp <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu WhatsApp (DDD) 9 xxxx-xxxx"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage error={formState.error} />
                </FormItem>
              )}
            />

            {/* Você é dono/gestor (MANTIDO) */}
            <FormField
              control={form.control}
              name="tipoUsuario"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-semibold">
                    Você é dono, gestor ou corretor autônomo? <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-800">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dono">Dono</SelectItem>
                      <SelectItem value="gestor">Gestor</SelectItem>
                      <SelectItem value="corretor">Corretor Autônomo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage error={formState.error} />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ENVIANDO...
                </>
              ) : (
                "GARANTIR ACESSO"
              )}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-2">
                Ao clicar, você concorda em ser redirecionado(a) para a página de checkout.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;
