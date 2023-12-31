import React, {useEffect, useState} from "react";

import classes from "./publicOfferPage.module.scss";

function PublicOfferPage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const [data, setData] = useState({
    header1: "1. Термины и определения:",
    description1:
          "— Акцепт Публичной оферты – полное и безоговорочное принятие условий Публичной оферты путем осуществления регистрации Покупателем на Сайте. В момент совершения Акцепта Публичной оферты Публичный договор между Сторонами считается заключенным.",
    
    header2: "2. Полное и безоговорочное согласие",
    description2:
          "Полным и безоговорочным согласием заключить Публичный договор и Акцептом Публичной оферты является регистрация Покупателя на Сайте и заказ выбранного им на Сайте Товара. Проведение Акцепта Публичной оферты означает, что Покупатель согласен со всеми положениями Публичной оферты, и равносилен заключению Публичного договора между Покупателем и Агентом.",
        
    
    header3: "3. Все размещенные положения",
    description3:
          "Все размещенные на Сайте положения, устанавливающие отношения Сторон в той или иной части, являются неотъемлемой частью Публичного договора и регулируют соответствующие отношения Сторон.",
    
    
    header4: "4. Регистрация",
    description4:
          "Один Покупатель может зарегистрироваться на Сайте Агента только один раз. После осуществления регистрации и подтверждении регистрации Агентом, Покупатель получает возможность заказывать Товар и пользоваться услугами Агента. Основными элементами, идентифицирующими Покупателя на Сайте, являются логин и пароль, указанные при регистрации (данные для авторизации). Регистрация является бесплатной.",


    header5: "5. Ответственность за потерю, разглашение, кражу своих регистрационных данных",
    description5:
            "Покупатель несет полную ответственность за потерю, разглашение, кражу своих регистрационных данных и за действия третьих лиц, использующих регистрационные данные Покупателя в своих целях. Администрация сайта не несет ответственности за вышеперечисленные действия.",
            

    header6: "6. Авторизация",
    description6:
            "Для оформления заказа Покупатель самостоятельно осуществляет выбор Товара на сайте и, используя инструкцию системы, формирует заказ товара, помещая выбранный товар в «Корзину» для заказа, таким образом, резервируя выбранный товар для себя. Далее Покупатель производит нажатие кнопки «Оформить заказ», после чего в течение 30 минут с Покупателем связывается оператор Агента по телефону, указанному при регистрации, подтверждает заказ, поясняет возможности доставки заказанного товара. Помещенные в «Корзину» товары будут считаться заказом только с момента подтверждения доставки заказа с учетом условия оплаты при получении, а также в случае списания денег с расчетного счета Покупателя. После того как оператор Агента подтвердил по телефону, указанному при регистрации Покупателя, возможность доставки заказанного товара или блюда, Покупатель не может отменить или заменить Заказ.",
      

    header7: "7. Для оформления заказа",
    description7:
            "Все размещенные на Сайте положения, устанавливающие отношения Сторон в той или иной части, являются неотъемлемой частью Публичного договора и регулируют соответствующие отношения Сторон.",
      
      
    header8: "8. После получения Покупателем товара и услуги",
    description8:
            "После получения Покупателем товара и услуги надлежащего качества и в должном объеме, факт передачи товара и услуги подтверждается с помощью оплаты за товар и доставку наличными средствами согласно тарифу.",
        

    header9: "9. Агент не несет ответственности",
    description9:
                "Агент не несет ответственности перед Покупателями за любые задержки и прерывания связи, ущерб или потери, происходящие прямо или косвенно по причинам непреодолимой силы, а также по причинам, находящимся вне сферы разумного контроля со стороны Агента. Агент не несет ответственности за продукцию если Покупатель (Пользователь) не проверил свой заказ на качество товара при Агенте.",  
    
    header10: "10. Авторизация",
    description10:
                "Агент не несет ответственности за несоблюдение пунктов Договора Покупателями, а также за нарушение Договора лицами, использующими имя и пароль Покупателя.",
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Публичная оферта на заключение Публичного договора</h1>
      <p className={classes.text}>
            Настоящее предложение о заключении Публичного договора адресовано физическим лицам 
            (далее именуются «Покупатель»), зарегистрированным на Интернет-сайте "Miss Dress" 
            (далее по тексту – «Сайт») и является официальным и публичным предложением ИП 
            "Аскаров Аскар" (является фактическим распорядителем Интернет-сайта и далее 
            именуется «Агент»), предмет и условия которого указаны в настоящей Публичной оферте 
            и на других страницах Интернет-сайта, которые также являются частью настоящей 
            Публичной оферты и регулируют отношения Сторон в целом по оказанию со стороны 
            Агента возмездных посреднических услуг.
      </p> 
            
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header1}</h2>{" "}
        <p className={classes.subText}>{data.description1}</p>
      </div>

      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header2}</h2>
        <p className={classes.subText}>{data.description2}</p>
      </div>
          
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header3}</h2>{" "}
        <p className={classes.subText}>{data.description3}</p>
      </div>
       
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header4}</h2>{" "}
        <p className={classes.subText}>{data.description4}</p>
      </div>

      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header5}</h2>{" "}
        <p className={classes.subText}>{data.description5}</p>
      </div>

      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header6}</h2>
        <p className={classes.subText}>{data.description6}</p>
      </div>
          
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header7}</h2>{" "}
        <p className={classes.subText}>{data.description7}</p>
      </div>
       
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header8}</h2>{" "}
        <p className={classes.subText}>{data.description8}</p>
      </div>

      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header9}</h2>{" "}
        <p className={classes.subText}>{data.description9}</p>
      </div>
       
      <div className={classes.content}>
        <h2 className={classes.subTitle}> {data.header10}</h2>{" "}
        <p className={classes.subText}>{data.description10}</p>
      </div>
    </div>
  );
}

export default PublicOfferPage;
