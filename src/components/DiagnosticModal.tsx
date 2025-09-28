import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Assume useToast, Dialog components, and utility components are available
// from your project structure (e.g., from shadcn/ui).
import { useToast } from "@/hooks/use-toast"; 
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


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
  // Assumindo que useToast está definido e disponível no escopo do seu projeto.
  const { toast } = useToast(); 

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
    
    // Ajuste para usar 'first_name' que é mais compatível com HeroSpark para nome.
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
        variant: webhookSuccess ? "default" : "destructive", 
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
      <DialogContent className="sm:max-w-[600px] bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative pb-4">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </button>
          <DialogTitle className="text-center text-xl md:text-2xl font-bold text-primary">
            Agende seu Diagnóstico
          </DialogTitle>
          <p className="text-center text-foreground text-sm md:text-base">
            INSIRA SEUS DADOS ABAIXO
          </p>
        </DialogHeader>

        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Nome Completo */}
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Nome Completo <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* E-mail */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    E-mail <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Celular/WhatsApp */}
            <FormField
              control={form.control}
              name="celular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Celular/WhatsApp <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu WhatsApp (DDD) 9 xxxx-xxxx"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Instagram/Site */}
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Instagram/Site <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Instagram ou site da imobiliária"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantos corretores */}
            <FormField
              control={form.control}
              name="quantosCorretores"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Quantos corretores você tem na imobiliária? <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-input text-foreground">
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
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Você é dono/gestor */}
            <FormField
              control={form.control}
              name="tipoUsuario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Você é dono, gestor ou corretor autônomo? <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-input text-foreground">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dono">Dono</SelectItem>
                      <SelectItem value="gestor">Gestor</SelectItem>
                      <SelectItem value="corretor">Corretor Autônomo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Valor Médio de VGV Mensal */}
            <FormField
              control={form.control}
              name="valorVGV"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-foreground text-sm font-medium">
                    Valor Médio de VGV Mensal <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-1.5" id="ate-1.5" />
                        <Label htmlFor="ate-1.5" className="text-foreground">
                          Até 1.5 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1.5-3" id="1.5-3" />
                        <Label htmlFor="1.5-3" className="text-foreground">
                          De 1.5 a 3 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="3-5" />
                        <Label htmlFor="3-5" className="text-foreground">
                          De 3 a 5 Milhões de VGV por mês
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="5+" />
                        <Label htmlFor="5+" className="text-foreground">
                          Mais de 5 Milhões de VGV por mês
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg disabled:opacity-50"
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
