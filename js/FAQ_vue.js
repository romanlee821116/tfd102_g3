$(document).ready(function(){
  new Vue({
    el: "#FAQ_app",
    data: {
      trade: [
        {
          Q: '非會員如何購買網路購買商品呢？',
          A: '小春堂目前網路訂購服務僅對會員開放，非會員無法購物，加入會員後不僅能購買商品，同時亦可於第一時間收到各種新品上市資訊與優惠活動，也可於會員中心隨時追蹤訂單出貨狀態哦。',
        },
        {
          Q: '如何加入會員？',
          A: '於本站首頁或是於頁面上點選【加入會員】，同意會員約定條款並成功註冊後，隨即享有會員相關權利及優質服務，同時擁有會員中心管理您的訂單資料與查詢任何交易記錄，小春堂有嚴密安全的資料庫管理，您的個人資料絕不會外流，購物時也能感受到我們的用心。',
        },
        {
          Q: '忘記密碼怎麼辦？',
          A: '若忘記密碼，可至登入頁面中選擇【忘記密碼】，輸入您的email帳號後，系統即會自動傳送密碼函至您的信箱中，請使用新密碼登入後，再至會員中心的修改密碼，修改您的密碼。',
        },
        {
          Q: '可以電話下單訂購嗎？',
          A: '很抱歉，實在是有太多次預訂後無出現也聯絡不上的事件，目前無法直接以電話訂購的方式，電話目前只提供問題諮詢服務，可以LINE 或 email與我們聯絡，留下相關詢問資料，將會有小幫手協助您完成相關訂購流程，或是建議您也可於營業時間內直接至台北本店門市選購商品。',
        },
        {
          Q: '可選擇的付款方式有那些？',
          A: '如您選擇的配送方式為宅配，僅提供信用卡線上刷卡服務，若您選擇的配送方式為超商取貨、門市取貨，則可選擇信用卡線上刷卡服務，或是取貨付款。',
        },
        {
          Q: '訂單成立後是否可以取消？',
          A: '由於訂單成立後系統會自動將資料交付物流公司進行包裝配送作業，因此若有取消訂單的需求，最晚需於商品出貨前聯繫客服，我們將於第一時間立即為您處理。',
        },
        {
          Q: '訂單成立後，是否可以更改訂單數量及商品？',
          A: '由於訂單成立後，系統隨即將訂單資料交付工廠備料排單生產，所以訂單成立後即無法更改數量及商品，請您見諒。',
        },
      ],
      ingredients: [
        {
          Q: '商品收到後有瑕疵，或是商品與訂購品項不符，該如何做換貨處理？',
          A: '本公司商品為食品類商品，因有賞味期限限制，不適用7天鑑賞期條款。請您在收到商品後立即確認商品狀況，若有缺失、毀損等重大瑕疵， 請於收到商品24小時內來電或來信，我們會儘快為您處理。',
        },
        {
          Q: '請問和菓子的保存方式？',
          A: '每一個甜點在網頁的甜點說明中以及禮盒外標示上，皆有個別建議的保存方式，小春堂的甜點皆為手工製作，不添加防腐劑，因此會建議收到後盡快食用，最能確保甜點的品質與風味哦！',
        },
        {
          Q: '品嘗和菓子的最佳方式為何？',
          A: '日本傳統方式為搭配現泡茶享用，小春堂的和菓子為改良減糖配方，使用台灣在地小農新鮮食材製成，單獨享用也不會過於甜膩，也很推薦直接細品和菓子的美味哦。',
        },
      ],
      transportation: [
        {
          Q: '訂購商品後需幾天的時間才可以收到商品呢？',
          A: '完成訂單後24小時內會由系統確認訂單，商品從訂購日起到送達約需3-7個工作天，並依您的指定時間到貨，若遇有原物料缺貨或配送中無法順利送達的情形，導致商品無法於指定到貨日送達，我們將會以網頁公告或專人聯繫通知您，請您留意。',
        },
        {
          Q: '訂購商品可以當日取貨嗎？',
          A: '為確保手工製作品質，目前線上訂購之所有商品皆為收到訂單之後才生產，故無法提供當日配的服務，建議您可於營業時間內直接至台北本店門市選購商品。',
        },
        {
          Q: '可選擇的配送方式有那些？',
          A: '配送方式目前提供宅配、超商取貨、門市取貨三種方式，宅配範圍目前暫限於台灣本島。',
        },
        {
          Q: '運費如何計算？',
          A: '宅配運費為80元，超商取貨目前僅提供711門市取貨，運費為60元，小春堂台北本店門市取貨則不收運費。',
        },
        {
          Q: '我要如何追蹤訂單進度？',
          A: '小春堂的所有顧客都能隨時追蹤自己的訂單，您可以登入會員，至會員中心的「訂單查詢」查看訂單進度。',
        },
      ],
    },
  })
})


$(function(){
  // 點擊問題類別按鈕，變換文字及底線顏色
  $('#FAQ_transaction').click(function(){
    // 底線顏色
    $('.FAQ_titleBtn').attr('id','FAQ_a');
    // 圖片變換
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_h.png');
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_n.png');
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_n.png');
    
    // 文字顏色
    $('#FAQ_transaction > p').css('color','#172852');
    $('#FAQ_ingredients > p').css('color','#cba89a');
    $('#FAQ_transport > p').css('color','#cba89a');

    // 把打開的QA都關掉
    $('.FAQ_outBorder').slideUp();
    $('.FAQ_plus').removeClass("FAQ_spin");
  })

  $('#FAQ_ingredients').click(function(){
    // 底線顏色
    $('.FAQ_titleBtn').attr('id','FAQ_b');

    // 圖片變換
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_h.png');
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_n.png');
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_n.png');

    // 文字顏色
    $('#FAQ_ingredients > p').css('color','#172852');
    $('#FAQ_transaction > p').css('color','#cba89a');
    $('#FAQ_transport > p').css('color','#cba89a');
    
    // 把打開的QA都關掉
    $('.FAQ_outBorder').slideUp();
    $('.FAQ_plus').removeClass("FAQ_spin");
  })

  $('#FAQ_transport').click(function(){
    // 底線顏色
    $('.FAQ_titleBtn').attr('id','FAQ_c');
    
    // 圖片變換
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_h.png');
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_n.png');
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_n.png');
    
    // 文字顏色
    $('#FAQ_transport > p').css('color','#172852');
    $('#FAQ_transaction > p').css('color','#cba89a');
    $('#FAQ_ingredients > p').css('color','#cba89a');
    
    // 把打開的QA都關掉
    $('.FAQ_outBorder').slideUp();
    $('.FAQ_plus').removeClass("FAQ_spin");
  })




  // 點擊問題類別按鈕，切換Q&A問題
  let QBtn = document.getElementsByClassName("FAQ_QBtn");
  let classification = document.getElementsByClassName("FAQ_classification");

  for(let i = 0; i < QBtn.length; i++){
    QBtn[i].addEventListener("click",function(){
      classification[i].classList.add("FAQ_on");
      $('.FAQ_classification').not(classification[i]).removeClass('FAQ_on');
    })
  }




  // 點擊問題，開關回答
  $('.FAQ_question').click(function(){
    $(this).parent('.FAQ_QAList').children('.FAQ_outBorder').slideToggle();
  });




  // 點擊問題，加號變減號
  let question = document.getElementsByClassName("FAQ_question");
  let plus = document.getElementsByClassName("FAQ_plus");

  for(let a = 0; a < question.length; a++){
    question[a].addEventListener("click",function(){
      plus[a].classList.toggle("FAQ_spin");
    });
  }
})
  
  
  
    
  


