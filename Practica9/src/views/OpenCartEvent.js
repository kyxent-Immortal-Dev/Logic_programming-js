export const openCartEvent = () => {
    try {

        const openCart = document.getElementById('openCart')

        console.log(openCart);

        openCart.addEventListener("click", () => {
            const modalEvent = document.getElementById('modalCart')
            modalEvent.className = '.open-cart'
        })

        const closeModal = document.getElementById('close-modal')
        closeModal.addEventListener('click', () => {
            const modalEvent = document.getElementById('modalCart')
            modalEvent.className = '.close-cart'

            modalEvent.textContent = ''
        })

    } catch (error) {
        throw new Error(`${error}`)
    }
}