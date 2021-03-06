$(document).ready(function(){
    getRandom();        //驗證碼亂數
    $('.eye2').hide();  //開眼睛看密碼

    // 登入與註冊的頁面轉換=====================
    $('#signup_form').hide();
    $('#loginTitle>h4').click(function(){
        $(this).addClass('h4_underline');
        $('#loginTitle>h4').not(this).removeClass('h4_underline');
        
    });
    // ============登入============
    $('#loginIcon').click(function(){
        $('.loginWrapper').css('height','140px');
        // $('.loginWrapper').animate({height:'100px'},500);
        // FB跟LINE登入
        $('.loginOther').fadeIn(700);
        // 密碼說明
        $('#password').attr('placeholder','請輸入密碼');
        $('.eye2').hide();
        // 小三角形移動位置
        $('#loginArrow').css('left','21%');
        // 送出按鈕
        $('button span').css('transform','translate3d(0,0,0)');
        // 登入註冊下底線
        $('.loginChoosenBar').css({left:'0'});
        // 文字顏色改變
        $(this).css('color','#172852');
        $('#signupIcon').css('color','#cba89a');
        // 顯示保持登入｜忘記密碼
        $('#loginKeep').fadeIn(700);
    });

    // ============註冊============
    $('#signupIcon').click(function(){
        $('.loginWrapper').css('height','410px');
        // $('.loginWrapper').css('height','100%');
        // var full = $('.loginWrapper').height();
        // $('.loginWrapper').animate({height: full}, 500);
        // FB跟LINE登入
        $('.loginOther').css('display','none');
        // 密碼說明
        $('#password').attr('placeholder','請輸入密碼 (數字+英文字母8-16位)');
        $('.eye2').show();
        // 小三角形移動位置
        $('#loginArrow').css('left','71%');
        // 送出按鈕
        $('button span').css({
            transform:'translate3d(0,-40px,0)',
        });
        // 登入註冊下底線
        $('.loginChoosenBar').css({left :'50%'});
        // 文字顏色改變
        $(this).css('color','#172852');
        $('#loginIcon').css('color','#cba89a');
        // 隱藏保持登入｜忘記密碼
        $('#loginKeep').hide();
    });

    // 忘記密碼=============================
    // =========跳轉忘記密碼==========
    $('#loginForgetPsw').click(function(){
        $('.loginLeft').css('transform','translate3d(-150%,0,0)');
        $('.forgetPWD').css('transform','translate3d(-150%,0,0)');
    });

    // ===========返回登入===========
    $('.loginBack').click(function(){
        $('.loginLeft').css('transform','translate3d(0,0,0)');
        $('.forgetPWD').css('transform','translate3d(0,0,0)');
    });

    // 開眼睛看密碼==========================
    $('.eye').click(function(){
        let type = $(this).prev().attr('type');
        if( type == 'text'){
            $(this).prev().attr('type','password');
        }else{
            $(this).prev().attr('type','text');
        };
    });
    // $('.eye').click(function(){
    //     $(this).prev().attr('type','text');
    // });
    // $(document).click(function(){
    //     $('.eye').prev().attr('type','password');
    // });


    // 驗證碼亂數================================   
    function getRandom(){
        let str = Math.random().toFixed(4);
        let num = parseInt(str*10000);  
        if(num < 1){
            $('.loginCodeNew').text('0000');
        }else if(num < 10){
            $('.loginCodeNew').text('000').append(num);
        }else if(num < 100){
            $('.loginCodeNew').text('00').append(num);
        }else if(num < 1000){
            $('.loginCodeNew').text('0').append(num);
        }
        else{
            $('.loginCodeNew').text(num);
        }
    };

    $('.loginRefresh').click(function(){
        getRandom();
    });

});



// 註冊會員表單的縣市下拉市選單==============
window.onload = function () {
    //當頁面載完之後，用AddressSeleclList.Initialize()，
    //傳入要綁定的縣市下拉選單ID及鄉鎮市區下拉選單ID
    AddressSeleclList.Initialize('縣市1', '鄉鎮市區1');
    //後面四個參數分別是兩個下拉選單的預設文字跟值
    // AddressSeleclList.Initialize('縣市2', '鄉鎮市區2', 'Please Select City', '0', 'Please Select Area', '0');
}
function show() {
    //取出指定縣市及鄉鎮市區的下拉選單的值
    alert(AddressSeleclList.ReturnSelectAddress('縣市1', '鄉鎮市區1'));
}


var app = window.AddressSeleclList =
{
    AdrressArray: [
                    ['台北市', '中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
                    ['新北市', '萬里鄉', '金山鄉', '板橋市', '汐止市', '深坑鄉', '石碇鄉', '瑞芳鎮', '平溪鄉', '雙溪鄉', '貢寮鄉', '新店市', '坪林鄉', '烏來鄉', '永和市', '中和市', '土城市', '三峽鎮', '樹林市', '鶯歌鎮', '三重市', '新莊市', '泰山鄉', '林口鄉', '蘆洲市', '五股鄉', '新莊市', '八里鄉', '淡水鎮', '三芝鄉', '石門鄉'],
                    ['台中市', '中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區'],
                    ['台中縣', '太平市', '大里市', '霧峰鄉', '烏日鄉', '豐原市', '后里鄉', '石岡鄉', '東勢鎮', '和平鄉', '新社鄉', '潭子鄉', '大雅鄉', '神岡鄉', '大肚鄉', '沙鹿鎮', '龍井鄉', '梧棲鎮', '清水鎮', '大甲鎮', '外埔鄉', '大安鄉'],
                    ['台東縣', '台東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉', '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里鄉', '金峰鄉', '大武鄉', '達仁鄉'],
                    ['台南市', '中西區', '東區', '南區', '北區', '安平區', '安南區'],
                    ['台南縣', '永康市', '歸仁鄉', '新化鎮', '左鎮鄉', '玉井鄉', '楠西鄉', '南化鄉', '仁德鄉', '關廟鄉', '龍崎鄉', '官田鄉', '麻豆鎮', '佳里鎮', '西港鄉', '七股鄉', '將軍鄉', '學甲鎮', '北門鄉', '新營市', '後壁鄉', '白河鎮', '東山鄉', '六甲鄉', '下營鄉', '柳營鄉', '鹽水鎮', '善化鎮', '新市鄉', '大內鄉', '山上鄉', '新市鄉', '安定鄉'],
                    ['宜蘭縣', '宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚台'],
                    ['花蓮縣', '花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'],
                    ['金門縣', '金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'],
                    ['南投縣', '南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'],
                    ['屏東縣', '屏東市', '三地門鄉', '霧台鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'],
                    ['苗栗縣', '竹南鎮', '頭份鎮', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'],
                    ['桃園縣', '中壢市', '平鎮市', '龍潭鄉', '楊梅鎮', '新屋鄉', '觀音鄉', '桃園市', '龜山鄉', '八德市', '大溪鎮', '復興鄉', '大園鄉', '蘆竹鄉'],
                    ['高雄市', '新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '東沙群島','南沙群島'],
                    ['高雄縣', '仁武鄉', '大社鄉', '岡山鎮', '路竹鄉', '阿蓮鄉', '田寮鄉', '燕巢鄉', '橋頭鄉', '梓官鄉', '彌陀鄉', '永安鄉', '湖內鄉', '鳳山市', '大寮鄉', '林園鄉', '鳥松鄉', '大樹鄉', '旗山鎮', '美濃鎮', '六龜鄉', '內門鄉', '杉林鄉', '甲仙鄉', '桃源鄉', '那瑪夏鄉', '茂林鄉', '茄萣鄉'],
                    ['基隆市', '仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
                    ['連江縣', '南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
                    ['雲林縣', '斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '台西鄉', '崙背鄉', '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮', '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'],
                    ['新竹市', '北區', '東區', '香山區'],
                    ['新竹縣', '寶山鄉', '竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'],
                    ['嘉義市', '西區', '東區'],
                    ['嘉義縣', '番路鄉', '梅山鄉', '竹崎鄉', '阿里山鄉', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'],
                    ['彰化縣', '彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林鎮', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'],
                    ['澎湖縣', '馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉']
                ]
    ,

    defaultOptionCityText: '請選擇縣市',
    defaultOptionCityValue: '',
    defaultOptionAreaText: '請選擇鄉鎮',
    defaultOptionAreaValue: '',
    
    Initialize: function (city, area, defaultCityText, defaultCityValue, defaultAreaText, defaultAreaValue) {

        var cityText = defaultCityText ? defaultCityText : this.defaultOptionCityText;
        var cityValue = defaultAreaValue ? defaultAreaValue : this.defaultOptionCityValue;
        var areaText = defaultAreaText ? defaultAreaText : this.defaultOptionAreaText;
        var areaValue = defaultAreaValue ? defaultAreaValue : this.defaultOptionAreaValue;

        var citySelect = document.getElementById(city);
        var areaSelect = document.getElementById(area);

        citySelect.options[0] = new Option(cityText, cityValue);
        areaSelect.options[0] = new Option(areaText, areaValue);
        for (var i = 0; i < this.AdrressArray.length; i++) {
            citySelect.options[i + 1] = new Option(this.AdrressArray[i][0], this.AdrressArray[i][0]);
        }
        citySelect.addEventListener ? citySelect.addEventListener('change', function (e) { app.AppendArea(e, areaSelect, areaText, areaValue) }, false) : citySelect.attachEvent('onchange', function (e) { app.AppendArea(e, areaSelect, areaText, areaValue) });
    },

    AppendArea: function (e, AreaSelect, areaText, areaValue) {
        var target = e.target ? e.target : e.srcElement;
        if (target.selectedIndex == 0) {
            AreaSelect.options.length = 0;
            AreaSelect.options[0] = new Option(areaText, areaValue);
            return;
        }
        AreaSelect.options.length = this.AdrressArray[target.selectedIndex - 1].length - 1;
        for (var i = 1; i < this.AdrressArray[target.selectedIndex - 1].length; i++) {
            AreaSelect.options[i - 1] = new Option(this.AdrressArray[target.selectedIndex - 1][i], this.AdrressArray[target.selectedIndex - 1][i]);
        }
    },

    ReturnSelectAddress: function (city, area) {
        var city = document.getElementById(city);
        var area = document.getElementById(area);
        return city.value + area.value;
    }
};

// 結束=================================================
