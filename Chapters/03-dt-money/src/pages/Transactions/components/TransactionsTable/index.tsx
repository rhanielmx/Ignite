import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useContextSelector } from 'use-context-selector'
import {
  Transaction,
  TransactionsContext,
} from '../../../../contexts/TransactionsContext'
import { dateFormatter, priceFormater } from '../../../../utils/formater'
import { PriceHighlight } from '../../style'
import { PaginationContainer, TransactionsTable } from './styles'

// Example items, to simulate fetching from another resources.
interface ItemsProps {
  currentItems: Transaction[]
}

interface PaginatedItemsProps {
  itemsPerPage: number
}

function Items({ currentItems }: ItemsProps) {
  return (
    <>
      {currentItems &&
        currentItems.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormater.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
    </>
  )
}

export function PaginatedTransactionsTable({
  itemsPerPage,
}: PaginatedItemsProps) {
  const { transactions, paginateTransactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        transactions: context.transactions,
        paginateTransactions: context.paginateTransactions,
      }
    },
  )

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = transactions.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(transactions.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % transactions.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  useEffect(() => {
    paginateTransactions(currentItems)
  }, [currentItems])

  return (
    <PaginationContainer>
      <TransactionsTable>
        <tbody>
          <Items currentItems={currentItems} />
        </tbody>
      </TransactionsTable>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<CaretRight size={24} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<CaretLeft size={24} />}
        renderOnZeroPageCount={() => null}
      />
    </PaginationContainer>
  )
}
