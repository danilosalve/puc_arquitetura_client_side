import { useState } from 'react';

export function LeadForm() {
    const [formData, setFormData] = useState(
        {
            companyName: '',
            companyRevenue: 'd',
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            receiveEmail: false
        }
    );

    const handleCompanyNameChange = (event) => {
        setFormData({
            ...formData,
            companyName: event.target.value
        })
    };

    const handleCompanyRevenueChange = (event) => {
        setFormData({
            ...formData,
            companyRevenue: event.target.value
        })
    };

    const handleContactNameChange = (event) => {
        setFormData({
            ...formData,
            contactName: event.target.value
        })
    };

    const handleContactPhoneChange = (event) => {
        setFormData({
            ...formData,
            contactPhone: event.target.value
        })
    };

    const handleContactEmailChange = (event) => {
        setFormData({
            ...formData,
            contactEmail: event.target.value
        })
    };

    const handleReceiveEmailChange = (event) => {
        setFormData({
            ...formData,
            receiveEmail: event.target.checked
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.companyRevenue === 'a+' || formData.companyRevenue === 'aa') {
            alert('O produto indicado para a sua empresa é o produto Master!!!');
        } else if (formData.companyRevenue === 'a') {
            alert('O produto indicado para a sua empresa é o produto Padrão!!!');
        } else {
            alert('O Produto indicado para a sua empresa é o produto Digital');
        }
    };

    return (
        <>
            <h1>Formulário de Vendas</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados da empresa:</legend>
                    <label>
                        <p><strong>Nome:</strong></p>
                        <input type='text' name='companyName' value={formData.companyName} onChange={handleCompanyNameChange} 
                        placeholder='Informe o nome da empresa' required/>
                    </label>
                    <label>
                        <p><strong>Faturamento Mensal:</strong></p>
                        <select id="companyRevenue" name="companyRevenue" onChange={handleCompanyRevenueChange}>
                            <option value="d">Abaixo de 30k</option>
                            <option value="c">Entre 30k e 50k</option>
                            <option value="b">Entre 50k e 100k</option>
                            <option value="a">Entre 100k e 300k</option>
                            <option value="aa">Entre 300k e 1M</option>
                            <option value="a+">Acima de 1M</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Contato:</legend>
                    <label>
                        <p><strong>Nome do contato:</strong></p>
                        <input type='text' name='contactName' value={formData.contactName} onChange={handleContactNameChange} 
                        placeholder='Informe o nome do contato' required/>
                    </label>
                    <label>
                        <p><strong>Telefone Comercial:</strong></p>
                        <input type='tel' name='contactPhone' value={formData.contactPhone} onChange={handleContactPhoneChange}
                        placeholder='(xx) xxxxx-xxxx' pattern="\([0-9]{2}\)[\s][0-9]{4,5}-[0-9]{4}" required/>
                        <p>(xx) xxxxx-xxxx</p>
                    </label>
                    <label>
                        <p><strong>E-Mail:</strong></p>
                        <input type='email' name='contactEmail' value={formData.contactEmail} onChange={handleContactEmailChange}
                        placeholder='seu@email.com' required />
                    </label>
                    <label>
                        <p><strong>Aceita receber e-mails com novidades?</strong></p>
                        <input type="checkbox" name='receiveEmail' value={formData.receiveEmail} onChange={handleReceiveEmailChange}></input>
                    </label>
                </fieldset>
                <button type="submit">Avaliar Produto Ideal</button>
            </form>
        </>
    )
}