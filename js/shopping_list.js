$(document).ready(function() {
    var item_area = $(".product_product");
    $(item_area).first().show().siblings().hide();
    // 選擇商品分類
    $(".product_area").mouseenter(function() {
        let index = $(this).index();
        if (!$(this).index() != index) {
            $(this).find("i").addClass("yellow").show();
            $(this).find('span').css({ color: '#172852' });
        } else {
            this.preventDefault();

        }
    });
    $(".product_area").mouseleave(function() {
        if ($(this).index() != index) {
            $(this).find("i").removeClass("yellow").hide();
            $(this).find('span').css({ color: '#bb866a' });
        } else {
            this.preventDefault();

        }
    });
    // 點擊切換商品分類內容
    $(".product_area").click(function() {
        let index = $(this).index();
        $(item_area).eq(index).fadeIn(500).show().siblings().hide();
        $(this).find("i").addClass("yellow").show().siblings();
        $(this).find('span').css({ color: '#172852' });
    });

    // 商品數量增減 

    $(".min").attr("disabled", true).css({ backgroundColor: "#ccc" });
    $(".add").click(function() {
        var t = $(this).siblings(".num");
        t.val(parseInt(t.val()) + 1);
        $(".min").removeAttr("disabled").css({ backgroundColor: "white", color: "#172852" });
    });
    $(".min").click(function() {
        var t = $(this).siblings(".num");
        if (parseInt(t.val()) > 1) {
            t.val(parseInt(t.val()) - 1)
        } else {
            $(".min").attr("disabled", "disabled").css({ backgroundColor: "#ccc", color: "black" });
        }

    });
    $(".product_num_btn").find("button").mouseenter(function() {
        $(this).css({ backgroundColor: "#172852", color: "white" })
    }).mouseleave(function() {
        $(this).css({ backgroundColor: "white", color: "#172852" })
    });


    // 購物車icon加數字
    let count = 0;
    $(".product_add_cart").click(function() {
        $("#product_counter").html(count += 1).addClass("animated-count");
    })

    //愛心點擊
    $('.product_heart').click(function() {
        $(this).toggleClass('product_heart_red');
        $(this).toggleClass('product_heart');

    });
    // 照片slider
    let index = 0;
    let divWidth = $('.product_img').width();
    $(".product_circle div").click(function() {
        index = ($(this).index());
        $(this).parent().prev('.product_img').animate({
            left: divWidth * index * -1
        });
        $(this).addClass("click");
        $(".product_circle div").not(this).removeClass("click");
    })

});