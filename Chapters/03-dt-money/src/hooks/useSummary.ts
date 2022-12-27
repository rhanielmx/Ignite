import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export function useSummary() {
  // const transactions = useContextSelector(
  //   TransactionsContext,
  //   (context) => context.transactions,
  // )

  const visibleTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.visibleTransactions,
  )
  console.log('useSummary', visibleTransactions)

  const summary = useMemo(() => {
    return visibleTransactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
        } else {
          acc.outcome += transaction.price
        }

        acc.total = acc.income - acc.outcome

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [visibleTransactions])

  return summary
}
