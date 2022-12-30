// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { line_items } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed.' })
  }

  // if (!priceId) {
  //   return res.status(400).json({ error: 'Price not found.' })
  // }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items,
    })
    res.status(201).json({
      // checkoutUrl: checkoutSession.url,
      sessionId: checkoutSession.id
    })

  } catch (err) {
    console.log(err)
  }

}
