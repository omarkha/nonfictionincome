
const stripe = require("stripe")("sk_test_51LewmOI2yKOXdLkUB1UjQbWLfSZHwcf4DBwH9eUsbX3jn4gBT4BZqM64SpyDMitwHKN8g950cWfeL8yfdFrFji5K00ytq3wF9C");
const express = require("express")
const router = express.Router();
router.post("/api/create-checkout-session", async (req, res) => {
    const product = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/purchase-successful/{CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:3000/purchase-canceled/{CHECKOUT_SESSION_ID}",
    });
    res.json(session);
});

router.get("/api/retrieve-stripe-session", async (req, res) => {

    const result = await stripe.checkout.sessions.list()
    res.send(result)
})


module.exports = router;