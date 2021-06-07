export default function withPriceFormat(WrapComponent, product) {

    product.real_price_text = new Intl.NumberFormat('vn').format(product.real_price)

    return <WrapComponent {...product} />

}