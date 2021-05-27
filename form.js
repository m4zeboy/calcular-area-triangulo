const Form = {
    Ax: document.querySelector('input#ax'),
    Ay: document.querySelector('input#ay'),
    Bx: document.querySelector('input#bx'),
    By: document.querySelector('input#by'),
    Cx: document.querySelector('input#cx'),
    Cy: document.querySelector('input#cy'),
    getValues() {
        return {
            ax: Form.Ax.value,
            ay: Form.Ay.value,
            bx: Form.Bx.value,
            by: Form.By.value,
            cx: Form.Cx.value,
            cy: Form.Cy.value
        }
    },
    validateFields() {
        const values = Form.getValues();
        if (
            values.ax.trim() === "" || values.bx.trim() === "" || values.cx.trim() === "" ||
            values.ay.trim() === "" || values.by.trim() === "" || values.cy.trim() === ""
            ) {   
            throw new Error('Preencha todos os campos')
        }
        console.log(values)
        return values
    },
    submitForm(event) {
        event.preventDefault()
        try {
            const values = Form.validateFields()

            const triangle = Form.transformToTriangle(values);

            const area = triangelArea(determinant(matrix(triangle)))
            console.log(area)

            const p = document.querySelector('#result p')
            p.innerHTML = `A área do triângulo é de ${area} unidades.` 

        } catch (error) {
            alert(error.message)
        }
    },
    transformToTriangle(values) {
        return {
            a: [values.ax, values.ay],
            b: [values.bx, values.by],
            c: [values.cx, values.cy],
        }
    }
}

