import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Assume useToast, Dialog components, and utility components are available
// from your project structure (e.g., from shadcn/ui).
import { useToast } from "@/hooks/use-toast"; 
import { X } from "lucide-react";

// Placeholder components - replace with your actual component paths
const Dialog = (props) => <div {...props} className={"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 transition-opacity duration-300 " + (props.open ? "opacity-100" : "opacity-0 pointer-events-none")}>{props.children}</div>;
const DialogContent = (props) => <div {...props} className={"bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-[600px] max-h-[90vh] overflow-y-auto " + props.className}>{props.children}</div>;
const DialogHeader = (props) => <div {...props}>{props.children}</div>;
const DialogTitle = (props) => <h2 {...props} className={"text-2xl font-bold " + props.className}>{props.children}</h2>;
const Button = (props) => <button {...props} className={"px-4 py-2 rounded-lg font-semibold transition-colors " + props.className}>{props.children}</button>;
const Input = (props) => <input {...props} className={"w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 " + props.className} />;
const Label = (props) => <label {...props} className={"text-sm font-medium " + props.className}>{props.children}</label>;
const Select = ({ onValueChange, defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };
  return (
    <select onChange={handleChange} value={value} className="w-full border p-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-500">
      {children}
    </select>
  );
};
const SelectTrigger = (props) => <div {...props}>{props.children}</div>;
const SelectValue = (props) => <div {...props}>{props.children}</div>;
const SelectContent = (props) => <div {...props}>{props.children}</div>;
const SelectItem = (props) => <option value={props.value}>{props.children}</option>;
const RadioGroup = (props) => <div {...props} className={"flex flex-col space-y-2 " + props.className}>{props.children}</div>;
const RadioGroupItem = (props) => <input type="radio" {...props} name={props.id} />;
const Form = (props) => <div {...props}>{props.children}</div>;
const FormField = ({ control, name, render }) => {
    const value = control._formValues[name];
    const error = control._formState.errors[name];
    const onChange = (e) => {
        control.setValue(name, e.target.value, { shouldValidate: true });
    };

    const fieldProps = {
        value,
        onChange: (e) => {
            if (e && e.target) { // Handle native input change event
                onChange(e);
            } else if (typeof e === 'string') { // Handle Select/Radio change event that passes just the value
                control.setValue(name, e, { shouldValidate: true });
            }
        },
    };
    
    // Mock for select/radio value setting outside of input
    const renderProps = render({
        field: {
            ...fieldProps,
            // Custom helper for Select/Radio to match onValueChange pattern
            onValueChange: (val) => {
                 control.setValue(name, val, { shouldValidate: true });
            }
        },
        formState: control._formState
    });

    return renderProps;
};
const FormItem = (props) => <div className="space-y-1">{props.children}</div>;
const FormLabel = (props) => <Label {...props}>{props.children}</Label>;
const FormControl = (props) => <div {...props}>{props.children}</div>;
const FormMessage = ({ children, formState, name }) => {
  const error = formState.errors[name];
  return error ? <p className="text-red-500 text-xs">{error.message}</p> : null;
};
const toast = (options) => console.log("Toast:", options.title, options.description, options.variant);

// Schema de validação Zod
const formSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  celular: z.string().min(1, "Celular/WhatsApp é obrigatório"),
  instagram: z.string().min(1, "Instagram/Site é obrigatório"),
  quantosCorretores: z.string().min(1, "Selecione uma opção"),
  tipoUsuario: z.string().min(1, "Selecione uma opção"),
  valorVGV: z.string().min(1, "Selecione uma opção"),
});

type FormData = z.infer<typeof formSchema>;

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  // Simulação de hook de toast, pois não temos o contexto aqui
  // const { toast } = useToast(); 

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      celular: "",
      instagram: "",
      quantosCorretores: "",
      tipoUsuario: "",
      valorVGV: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    // 1. Construir URL do checkout com os dados do usuário
    const checkoutUrl = new URL("https://pay.herospark.com/workshop-imobiliari-a-lucrativa-466738");
    
    // MUDANÇA AQUI: Usando 'first_name' para maior compatibilidade com HeroSpark
    checkoutUrl.searchParams.append("first_name", data.nomeCompleto); 
    checkoutUrl.searchParams.append("email", data.email);
    checkoutUrl.searchParams.append("phone", data.celular);

    let webhookSuccess = false;

    try {
      console.log("Enviando dados para o webhook:", data);

      // 2. Enviar dados para o webhook com timeout
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
        body: JSON.stringify(data),
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

    // 3. Sempre redirecionar para o checkout, independente do webhook
    try {
      toast({
        title: webhookSuccess ? "Sucesso!" : "Redirecionando...",
        description: webhookSuccess
          ? "Dados enviados para o CRM. Abrindo checkout em nova aba..."
          : "Não foi possível conectar ao CRM, mas estamos te redirecionando para o checkout.",
        variant: webhookSuccess ? "success" : "warning",
      });

      // Fechar modal e redirecionar após um breve delay
      setTimeout(() => {
        onClose();
        // Abre o checkout em uma nova aba para não perder a LP
        window.open(checkoutUrl.toString(), "_blank"); 
      }, 1000);

    } catch (error) {
      console.error("Erro ao processar checkout:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado ao tentar redirecionar. Copie e cole o link do checkout manualmente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white text-gray-800 border-gray-300 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative pb-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-1 rounded-sm text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </button>
          <DialogTitle className="text-center text-xl md:text-2xl font-extrabold text-blue-600">
            Agende seu Diagnóstico
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm md:text-base mt-1">
            INSIRA SEUS DADOS ABAIXO PARA CONTINUAR
          </p>
        </DialogHeader>

        <Form {...form} control={form.control} formState={form.formState}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Nome Completo */}
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Nome Completo <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800"
                    />
                  </FormControl>
                  <FormMessage formState={form.formState} name="nomeCompleto"/>
                </FormItem>
              )}
            />

            {/* E-mail */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    E-mail <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800"
                    />
                  </FormControl>
                  <FormMessage formState={form.formState} name="email"/>
                </FormItem>
              )}
            />

            {/* Celular/WhatsApp */}
            <FormField
              control={form.control}
              name="celular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Celular/WhatsApp <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu WhatsApp (DDD) 9 xxxx-xxxx"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800"
                    />
                  </FormControl>
                  <FormMessage formState={form.formState} name="celular"/>
                </FormItem>
              )}
            />

            {/* Instagram/Site */}
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Instagram/Site <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Instagram ou site da imobiliária"
                      {...field}
                      className="bg-gray-50 border-gray-300 text-gray-800"
                    />
                  </FormControl>
                  <FormMessage formState={form.formState} name="instagram"/>
                </FormItem>
              )}
            />

            {/* Quantos corretores */}
            <FormField
              control={form.control}
              name="quantosCorretores"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Quantos corretores você tem na imobiliária? <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onValueChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-800">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-3">1 a 3</SelectItem>
                      <SelectItem value="4-8">4 a 8</SelectItem>
                      <SelectItem value="9-15">9 a 15</SelectItem>
                      <SelectItem value="15-30">15 a 30</SelectItem>
                      <SelectItem value="30+">Mais de 30</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage formState={form.formState} name="quantosCorretores"/>
                </FormItem>
              )}
            />

            {/* Você é dono/gestor */}
            <FormField
              control={form.control}
              name="tipoUsuario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Você é dono, gestor ou corretor autônomo? <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onValueChange} defaultValue={field.value}>
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
                  <FormMessage formState={form.formState} name="tipoUsuario"/>
                </FormItem>
              )}
            />

            {/* Valor Médio de VGV Mensal */}
            <FormField
              control={form.control}
              name="valorVGV"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-gray-800 text-sm font-semibold">
                    Valor Médio de VGV Mensal <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onValueChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-1.5" id="ate-1.5" />
                        <Label htmlFor="ate-1.5" className="text-gray-700">
                          Até 1.5 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1.5-3" id="1.5-3" />
                        <Label htmlFor="1.5-3" className="text-gray-700">
                          De 1.5 a 3 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="3-5" />
                        <Label htmlFor="3-5" className="text-gray-700">
                          De 3 a 5 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="5+" />
                        <Label htmlFor="5+" className="text-gray-700">
                          Mais de 5 Milhões de VGV por mês
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage formState={form.formState} name="valorVGV"/>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 mt-6"
            >
              {isLoading ? "ENVIANDO..." : "QUERO AGENDAR"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;
