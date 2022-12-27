import { BaseInput, FormContainer } from "./styles";
import { useFormContext } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormSchema = z.object({
    cep: z.string(),
    rua: z.string(),
    numero: z.number(),
    complemento: z.string().optional(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),
})

type NewOrderFormInput = z.infer<typeof newOrderFormSchema>

export function BillingForm() {

    const { register } = useFormContext()

    return (
        <FormContainer>
            <BaseInput columns={4} placeholder="CEP" {...register('cep')} />
            <BaseInput columns={12} placeholder="Rua" {...register('rua')}/>
            <BaseInput columns={4} placeholder="Número" {...register('numero')}/>
            <BaseInput columns={8} placeholder="Complemento" aria-details="Opcional" {...register('complemento')}/>
            <BaseInput columns={4} placeholder="Bairro" {...register('bairro')}/>
            <BaseInput columns={6} placeholder="Cidade" {...register('cidade')}/>
            <BaseInput columns={2} placeholder="UF" {...register('uf')}/>
        </FormContainer>
    )


}