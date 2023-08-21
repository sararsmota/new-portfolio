export default function initdarkMode(){
    const chk = document.getElementById('chk')

    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark')
    })

}