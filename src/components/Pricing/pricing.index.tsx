// import { FAQ } from "./faq";
import Image from "next/image";
import Plans from "./plans";
import priceImage from "./images/plan.png";

interface PricingProps {
  /** Trang */
  page: string;
}
const PricingComponent: React.FC<PricingProps> = ({
  page,
}: PricingProps): JSX.Element => {
  const PRODUCT = {
    slug: "product-analytics",
    lowercase: "product analytics",
    capitalized: "Product Analytics",
    freeTier: "10,000 ",
  };
  const FAQs = [
    {
      question: "Page là gì?",
      children: `Mỗi kênh bán hàng sẽ có các Trang bán hàng (Page) của bạn. Ví dụ: Bạn bán hàng trên Zalo, bạn có 5 tài khoản Zalo cá nhân thì được coi là 5 Page.`,
    },
    {
      question: "Tôi muốn thanh toán hàng tháng được không?",
      children: "Tất nhiên, bạn có thể thanh toán định kỳ hàng tháng.",
    },
    {
      question: "Sau khi mua tôi có được hoàn tiền không?",
      children:
        'Có, trong 30 ngày đầu tiên sau khi thanh toán. Nếu bạn không hài lòng với sản phẩm/dịch vụ của chúng tôi, chúng tôi sẽ hoàn tiền 100% cho bạn. <a href="/refund">Xem chi tiết</a>.',
    },
    {
      question: "Nếu gói của tôi hết hạn thì điều gì xảy ra?",
      children:
        "Trong vòng 14 ngày kể từ gói hết hạn, chúng tôi sẽ gửi thông báo cho bạn. Nếu bạn không gia hạn thì hệ thống sẽ tự động chuyển về gói Miễn phí.",
    },
    {
      question: "Dữ liệu của tôi lưu trong bao lâu?",
      children:
        "Với gói trả phí sẽ lưu trữ khi bạn sử dụng. Với gói miễn phí sẽ lưu trữ trong 90 ngày (nếu Page không phát sinh tin nhắn gửi đi), sau 90 ngày hệ thống tự động xoá toàn bộ dữ liệu của Page.",
    },

    {
      question: "Tôi không sử dụng thì dữ liệu tôi có lưu trữ không?",
      children:
        'Không, hệ thống chúng tôi tự động xoá toàn bộ dữ liệu. Và tuân thủ chính sách bảo mật. <a href="/privacy">Xem chính sách</a>',
    },
    {
      question: "Tôi có thể chủ động xoá dữ liệu được không?",
      children:
        'Chắc chắn rồi, bạn truy cập: Page -> Thiết lập -> Tìm đến nút "Xoá vĩnh viễn Page". <a href="/privacy">Xem hướng dẫn</a>',
    },
    {
      question: "Tôi muốn lưu trữ dữ liệu tại máy chủ của tôi được không?",
      children:
        "Hiện tại chúng tôi chưa hỗ trợ tính năng này. Nếu bạn có nhu cầu vui lòng liên hệ với chúng tôi. <a href='/contact'>Liên hệ</a>",
    },

    {
      question: "Tôi cần hỗ trợ trực tiếp",
      children:
        "Hiện tại chúng tôi hỗ trợ khách hàng trực tiếp ở Hà Nội và Hồ Chí Minh.",
    },
    {
      question: "Tạo ticket đến nền tảng là gì?",
      children:
        "Khi bạn bán hàng trên Facebook, Tiktok... bạn sẽ gặp phải các sự cố đến Page. Chúng tôi là đối tác cao cấp với nền tảng, sẽ liên hệ nền tảng để tạo Ticket hỗ trợ. Nhìn chung, bạn chỉ việc kinh doanh, nếu phát sinh vấn đề chúng tôi xử lý thay bạn. <br/> (Lưu ý: Page là cá nhân sẽ không được hỗ trợ).",
    },

    {
      question: "Có các hình thức thanh toán nào?",
      children:
        "Bạn có thể thanh toán bằng thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử.",
    },
  ];

  return (
    <section id="pricing" className={`flex flex-col px-5 py-10`}>
      <div className="flex flex-col-reverse md:flex-row md:gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">{"pricing"}</h2>
          <br />

          {/* Dịch với những đoạn có tag html */}
        </div>
        <div className="md:w-96">
          <Image quality={100} src={priceImage} alt="plan_pricing" priority />
        </div>
      </div>

      <div className="lg:flex justify-between items-start gap-12 -mx-5 md:mx-0">
        <div className="flex-grow px-5 md:px-0">
          <small>
            <span className="text-red-600">*</span>
            {"desc-list"}
          </small>
          <Plans />
        </div>

        <div
          className={`md:sticky ${
            page === "page_home" ? "top-28" : "top-20"
          } px-5 md:px-0 lg:w-96 lg:mt-4`}
        >
          <h4 className="text-3xl font-bold">Câu hỏi thường gặp</h4>
          {FAQs.map((faq, index) => {
            // return <FAQ {...faq} key={index} />;
            return <div key={index}></div>;
          })}
          <small>
            Bạn không tìm thấy câu hỏi của mình? hãy{" "}
            <a href="/lien-he" className="text-red-600">
              Liên hệ
            </a>{" "}
            chúng tôi
          </small>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
