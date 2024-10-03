const Plans = () => {
  const QUOTAs = [
    {
      name: "Giá",
      free: `-`,
      pro: `<strong>275.000đ</strong><span class="text-xs">/tháng</span>`,
      unlimited: `<strong>Liên hệ</strong>`,
      enterprise: `Liên hệ`,
    },
    {
      name: "Tin nhắn gửi đi",
      free: `10.000<span class="text-xs">/tháng</span>`,
      pro: `<strong>110.000</strong><span class="text-xs">/tháng</span>`,
      unlimited: `<strong>1.010.000</strong>`,
      enterprise: `Liên hệ`,
      tooltips: {
        free: "",
        pro: "Số tin nhắn gửi đi trong tháng",
        unlimited: "Số tin nhắn gửi đi trong tháng",
      },
    },
    {
      name: "Số ký tự được xử lý AI",
      free: "50.000",
      pro: `<strong>1.000.000</strong><span class="text-xs">/tháng</span>`,
      unlimited: `<strong>10.000.000</strong>`,
      enterprise: "Liên hệ",
    },
    {
      name: "Số hình ảnh được xử lý AI",
      free: "-",
      pro: `<strong>500</strong><span class="text-xs">/tháng</span>`,
      unlimited: `<strong>10.000</strong>`,
      enterprise: "Liên hệ",
    },
    {
      name: "Số phút âm thanh được xử lý AI",
      free: "-",
      pro: `<strong>1.000</strong><span class="text-xs">/tháng</span>`,
      unlimited: `<strong>20.000</strong>`,
      enterprise: "Liên hệ",
    },

    {
      name: "Số Page sử dụng",
      free: "5",
      pro: "20",
      unlimited: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      name: "Số nhân sự",
      free: "10",
      pro: "50",
      unlimited: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      name: "Thời gian sử dụng",
      free: "Không giới hạn",
      pro: "Theo tháng",
      unlimited: "Không giới hạn",
      enterprise: "Liên hệ",
    },
    {
      name: "Số khách hàng lưu trữ / Page",
      free: "5.000",
      pro: "Không giới hạn",
      unlimited: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
  ];

  const FEATURES = [
    {
      name: "Tự động trả lời bằng AI",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },

    {
      name: "Ẩn thông tin khách hàng*",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Kịch bản Chatbot",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Chuỗi sự kiện",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Chia đều khách hàng",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Thống kê & Báo cáo",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Đồng bộ & Tối ưu quảng cáo",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Phân quyền dữ liệu",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tạo đơn hàng tự động",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tích hợp Thanh toán",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tích hợp Giao vận",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tuỳ biến Logo",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tên miền riêng",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Xoá Copyright",
      free: "-",
      pro: "-",
      unlimited: "include",
      enterprise: "include",
    },
  ];
  const CHANNELS = [
    {
      name: "Facebook Page",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },

    {
      name: "Zalo OA",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },

    {
      name: "Instagram",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Whatsapp",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    // {
    //   name: "Tiktok Page",
    //   free: "-",
    //   pro: "include",
    //   unlimited: "include",
    //   enterprise: "include",
    // },

    // {
    //   name: "Shopee",
    //   free: "-",
    //   pro: "include",
    //   unlimited: "include",
    //   enterprise: "include",
    // },
    // {
    //   name: "Lazada",
    //   free: "-",
    //   pro: "include",
    //   unlimited: "include",
    //   enterprise: "include",
    // },
    {
      name: "Chat Plugin",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tại cửa hàng (QR)",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Zalo Profile",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Messenger Profile",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tiktok Profile",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Web Form",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tracking Website",
      free: "5",
      pro: "10",
      unlimited: "30",
      enterprise: "include",
    },
  ];
  const SUPPORTS = [
    {
      name: "Cộng đồng",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Chat, Gọi điện",
      free: "include",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },

    {
      name: "Trực tiếp*",
      free: "-",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
    {
      name: "Tạo ticket đến nền tảng*",
      free: "Giới hạn",
      pro: "include",
      unlimited: "include",
      enterprise: "include",
    },
  ];

  const PRICING = [
    { id: "quotas", name: "Quota", value: QUOTAs },
    { id: "features", name: "Tính năng", value: FEATURES },
    { id: "channels", name: "Kênh bán hàng", value: CHANNELS },
    { id: "supports", name: "Hỗ trợ", value: SUPPORTS },
  ];
  return (
    <div className="w-full overflow-auto md:overflow-clip">
      <div className="grid gap-y-2 mb-8">
        <div className="border border-light dark:border-dark rounded pb-2">
          <div className="md:sticky top-0 z-10 flex items-center space-x-4 px-2 lg:px-4 py-1.5 rounded bg-[#E5E7E0] dark:bg-accent-dark mb-2">
            <div className="flex-grow"></div>
            <div className="max-w-[20%] w-full min-w-[125px]">
              <h4 className="m-0 text-base opacity-70 font-bold">Free</h4>
              <p className="m-0 text-sm opacity-70 font-bold">
                Miễn phí trọn đời
              </p>
            </div>
            <div className="max-w-[20%] w-full min-w-[125px]">
              <h4 className="m-0 text-base opacity-70 font-bold">Pro</h4>
              <p className="m-0 text-sm opacity-70 font-bold">
                Tăng tốc bán hàng
              </p>
            </div>
            <div className="max-w-[20%] w-full min-w-[125px]">
              <h4 className="m-0 text-base opacity-70 font-bold">Unlimited</h4>
              <p className="m-0 text-sm opacity-70 font-bold">Không giới hạn</p>
            </div>
          </div>
          <div className="">
            {PRICING.map((group, index) => (
              <div key={index}>
                {group.id != "quotas" && (
                  <div className="flex items-center space-x-4 px-2 lg:px-4 py-1.5 rounded bg-accent dark:bg-accent-dark my-2">
                    <div className="">
                      <h4 className="m-0 text-base opacity-70">{group.name}</h4>
                    </div>
                  </div>
                )}

                {group.value.map((row, innerIndex) => (
                  <div key={innerIndex} className="overflow-auto w-full">
                    <div className="flex items-center space-x-4 px-2 lg:px-4 py-1.5 rounded hover:bg-accent/60 dark:hover:bg-accent-dark/70">
                      <div className="flex-grow">
                        <span className="">
                          <span className="relative">
                            <h5 className="m-0 min-w-[200px] w-full text-[15px] opacity-70 font-medium dark:border-dark inline-block cursor-default">
                              {row.name}
                            </h5>
                          </span>
                        </span>
                      </div>
                      <div className="max-w-[20%] w-full min-w-[125px]">
                        {row.free === "include" && (
                          <svg
                            className="text-green w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="m3.995 8.15 3.468 3.47 8.24-8.24a1.305 1.305 0 0 1 1.84 0l.783.782a1.305 1.305 0 0 1 0 1.842L8.46 15.869a1.304 1.304 0 0 1-1.833.008l-5.238-5.15A1.255 1.255 0 0 1 1 9.785c.004-.367.141-.682.409-.934l.772-.726a1.303 1.303 0 0 1 1.814.027V8.15Z"
                            ></path>
                          </svg>
                        )}
                        {row.free != "include" && (
                          <span
                            className="text-sm"
                            dangerouslySetInnerHTML={{
                              __html: String(row.free),
                            }}
                          ></span>
                        )}
                      </div>
                      <div className="max-w-[20%] w-full min-w-[125px]">
                        {row.pro === "include" && (
                          // <Check2 className="text-green w-5" />
                          <div></div>
                        )}
                        {row.pro != "include" && (
                          <span
                            className="text-sm"
                            dangerouslySetInnerHTML={{
                              __html: String(row.pro),
                            }}
                          ></span>
                        )}
                      </div>
                      <div className="max-w-[20%] w-full min-w-[125px]">
                        {row.unlimited === "include" && (
                          // <Check2 className="text-green w-5" />
                          <div></div>
                        )}
                        {row.unlimited != "include" && (
                          <span
                            className="text-sm"
                            dangerouslySetInnerHTML={{
                              __html: String(row.unlimited),
                            }}
                          ></span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 px-2 lg:px-4 py-1.5 rounded sticky bottom-0 text-[13px] md:text-[14px] ">
          <div className="flex-grow"></div>
          <div className="max-w-[20%] w-full min-w-[125px]">
            <a
              rel="noopener noreferrer"
              href="https://botbanhang.vn"
              className="bg-button-shadow dark:bg-button-shadow-dark border-[1.5px] bg-[rgb(177,120,22)] relative top-[2px] rounded-[6px] text-primary inline-block border-button text-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-md !w-auto group"
              target=""
            >
              <span className="relative bg-[rgb(255,172,75)] bg-opacity-75 text-center w-auto bg-orange text-primary hover:text-primary dark:text-primary dark:hover:text-primary border-button dark:border-button-dark dark:bg-orange rounded-[6px] px-2  md:px-4 py-1.5 translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] border-[1.5px] mx-[-1.5px] group-disabled:hover:!translate-y-[-2px] block active:transition-all active:duration-100 select-none ">
                Bắt đầu miễn phí
              </span>
            </a>
          </div>
          <div className="max-w-[20%] w-full min-w-[125px]">
            <a
              rel="noopener noreferrer"
              href="https://botbanhang.vn"
              className="bg-button-shadow dark:bg-button-shadow-dark border-[1.5px] bg-[rgb(177,120,22)] relative top-[2px] rounded-[6px] text-primary inline-block border-button text-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-md !w-auto group"
              target=""
            >
              <span className="relative bg-[rgb(255,172,75)] bg-opacity-75 text-center w-auto bg-orange text-primary hover:text-primary dark:text-primary dark:hover:text-primary border-button dark:border-button-dark dark:bg-orange rounded-[6px] px-1  md:px-3 py-1.5 translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] border-[1.5px] mx-[-1.5px] group-disabled:hover:!translate-y-[-2px] block active:transition-all active:duration-100 select-none ">
                Dùng thử 14 ngày
              </span>
            </a>
          </div>
          <div className="max-w-[20%] w-full min-w-[125px]">
            <a
              rel="noopener noreferrer"
              href="https://botbanhang.vn"
              className="bg-button-shadow dark:bg-button-shadow-dark border-[1.5px] bg-[rgb(177,120,22)] relative top-[2px] rounded-[6px] text-primary inline-block border-button text-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-md !w-auto group"
              target=""
            >
              <span className="relative bg-[rgb(255,172,75)] bg-opacity-75 text-center w-auto bg-orange text-primary hover:text-primary dark:text-primary dark:hover:text-primary border-button dark:border-button-dark dark:bg-orange rounded-[6px] px-2  md:px-4 py-1.5 translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] border-[1.5px] mx-[-1.5px] group-disabled:hover:!translate-y-[-2px] block active:transition-all active:duration-100 select-none ">
                Tư vấn miễn phí
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plans;
