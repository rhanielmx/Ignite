import { useContext } from "react";
import { OrdersContext } from "../../contexts/OrdersContext";
import { SuccessOrderDetails, SuccessContainer, SuccessInfo, DetailsCards, DetailsCardsIcon, BorderComponent } from "./styles";

import successIllustration from "../../assets/success_ilu.svg"
import { CurrencyDollar, MapPin, MapPinLine, Timer } from "phosphor-react";

const paymentPreferenceMapper: { [paymentType: string]: string } = {
    money: 'Dinheiro',
    debit: 'Cartão de Débito',
    credit: 'Cartão de Crédito'
}

export function Success() {
    const { orders } = useContext(OrdersContext)
    const newOrder = orders[0]
    return (
        <SuccessContainer>
            <SuccessInfo>
                <span>Uhu! Pedido confirmado</span>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <BorderComponent>
                    <SuccessOrderDetails>
                        <DetailsCards>
                            <DetailsCardsIcon variant='local'>
                                <MapPin size={16} weight="fill" />
                            </DetailsCardsIcon>
                            <div>
                                <span>Entrega em <strong>{newOrder.road}, {newOrder.number}</strong></span>
                                <span>{newOrder.district} - {newOrder.city}, {newOrder.estate} </span>
                            </div>
                        </DetailsCards>
                        <DetailsCards>
                            <DetailsCardsIcon variant='time'>
                                <Timer size={16} weight="fill" />
                            </DetailsCardsIcon>
                            <div>
                                <span>Previsão de Entrega</span>
                                <strong>20min - 30min</strong>
                            </div>
                        </DetailsCards>
                        <DetailsCards>
                            <DetailsCardsIcon variant='payment'>
                                <CurrencyDollar size={16} weight="fill" />
                            </DetailsCardsIcon>
                            <div>
                                <span>Pagamento na Entrega</span>
                                <strong>{paymentPreferenceMapper[newOrder.paymentPreference]}</strong>
                            </div>
                        </DetailsCards>
                    </SuccessOrderDetails>
                </BorderComponent>
            </SuccessInfo>
            <img src={successIllustration} alt="illustration with delivery guy on his way"></img>
        </SuccessContainer >
    )
}