/// Metodos que não implicam alteração do modelo de dados

// mostrar popup
export const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}

export const closePopup = () => popup.classList.remove('open');
