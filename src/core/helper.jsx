
export default {
    currency(number) {
        return new Intl.NumberFormat('vn').format(number) + ' vnđ'
    }
}
