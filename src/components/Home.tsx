import "./Home.scss";

export default function Home() {
    return(
        <div className="container-home">
            <div className="container-info">
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
                <div className="container-diferencial">
                    <span><img src="../public/Icon (7).svg"/>Compra simples e segura</span>
                    <span><img src="../public/Icon (4).svg"/>Entrga rápida e rastreada</span>
                    <span><img src="../public/Icon (3).svg"/>Embalagem mantém o café intacto</span>
                    <span><img src="../public/Icon (5).svg"/>O café chega fresquinho até você</span>
                </div>
            </div>
            <div className="container-imagem">
                <img src="../Imagem.svg"/>
            </div>
        </div>
    )
}
