const inputs = document.querySelectorAll('.controls input')

function upDate() {
    const upDateInputs = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + upDateInputs);
}

    inputs.forEach(input => input.addEventListener('change', upDate));
    inputs.forEach(input => input.addEventListener('mousemove', upDate));