import { useState } from "react";

export function CacForm() {
    const [formData, setFormData] = useState({ investment: 0, numberOfSales: 0 });
    const [cacValue, setCac] = useState(0);
    const handleInvestmentChange = (event: any) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            investment: value
        })
        if (formData.numberOfSales && value > 0 && formData.numberOfSales! > 0) {
            setCac(value / formData.numberOfSales!);
        }
    };

    const handleNumberOfSalesChange = (event: any) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            numberOfSales: value
        })
        if (formData.investment && formData.investment! > 0 && value > 0) {
            setCac(formData.investment! / value);
        }
    };    

    return (
        <>
            <form>
                <fieldset>
                    <legend>Entre com os dados para o calculo:</legend>

                    <label>
                        <p>Investimento</p>
                        <input
                            type="number"
                            name='investment'
                            value={formData.investment}
                            onChange={handleInvestmentChange}
                            min="1"
                            step="0.01"
                            placeholder="Informe o valor de investimento"
                            required
                        ></input>
                    </label>
                    <label>
                        <p>Número de Vendas:</p>
                        <input
                            type="number"
                            name='numberOfSales'
                            value={formData.numberOfSales}
                            onChange={handleNumberOfSalesChange} 
                            min="1"
                            placeholder="Informe o número de vendas"
                            required
                        ></input>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Resultado:</legend>
                    <span>{cacValue.toFixed(2)}</span>
                </fieldset>
            </form>
        </>
    )
}