const socket = io(baseUrl);

$(".service-btn").on("click", function () {
    const id = $(this).data("id");
    $("#serviceId").val(id);
});

$(".tiket-button").on("click", function () {
    $(".tiket-button").prop("disabled", true);
    $(this).addClass("loading");
    const data = {
        layananId: $("#serviceId").val(),
        priority: $(".priority:checked").val(),
        paymentMethod: $(this).data("method"),
    };
    const kodeAntrian = data.paymentMethod[0];

    $.post(`/publik/daftar_antrian/`, data)
        .done((res) => {
            const {noAntrian} = res;
            const {layananId, priority} = data;
            const noAntrianText = kodeAntrian + "-" + noAntrian;
            if (res.status == 1) {
                setTimeout(async () => {
                    socket.emit("newAntrian", {
                        noAntrian,
                        layananId,
                        priority,
                    });
                    printTiket(noAntrianText, res.layanan);
                }, 1000);
            }
        })
        .fail((res) => {
            console.log(res)
            // show alert
        })
        .always(() => {
            setTimeout(() => {
                $(this).removeClass("loading");
                $(".tiket-button").prop("disabled", false);
            }, 2000);
        });
});

$(".service-btn").on("click", function () {
    $("#paymentModal").prop("checked", true);
});

const printTiket = (noAntrian, namaLayanan) => {
    moment().locale("id");
    const now = moment().format("LL");
    const time = moment().format("LT");
    $("#noAntrianPrint").html(noAntrian);
    $("#layananPrint").html(namaLayanan);
    $("#datePrint").html(now);
    $("#timePrint").html(time);
    window.print();
};

