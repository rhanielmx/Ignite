import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  Transaction,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormater } from '../../utils/formater'
import { PaginatedTransactionsTable } from './components/TransactionsTable'
import { SearchForm } from './components/SearchForm'
import { PriceHighlight, TransactionsContainer } from './style'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <PaginatedTransactionsTable itemsPerPage={5} />
      </TransactionsContainer>
    </div>
  )
}
