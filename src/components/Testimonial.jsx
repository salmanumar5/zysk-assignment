
const Testimonial = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-24 w-full bg-[#F9FAFB]">
      {/* Placeholder for SVG */}
      <div>
        {/* Replace this div with your SVG */}
        <svg width="142" height="40" viewBox="0 0 142 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.583374" y="16" width="7.99999" height="7.99999" fill="#079455" />
                    <rect x="24.5833" y="24" width="8" height="7.99999" transform="rotate(180 24.5833 24)" fill="#067647" />
                    <path d="M8.58347 16L16.5835 8V16L8.58347 24V16Z" fill="#ABEFC6" />
                    <path d="M16.5833 24L8.58336 32L8.58336 24L16.5833 16L16.5833 24Z" fill="#75E0A7" />
                    <path d="M0.583374 16L16.5833 0V7.99999L8.58336 16H0.583374Z" fill="#47CD89" />
                    <path d="M24.5833 24L8.58336 40L8.58336 32L16.5834 24L24.5833 24Z" fill="#17B26A" />
                    <path d="M42.0067 28.5667C40.7467 28.5667 39.5256 28.3878 38.3434 28.0301C37.1767 27.6723 36.2512 27.1978 35.5667 26.6067L36.6167 24.2501C37.2856 24.779 38.1023 25.2145 39.0667 25.5567C40.0467 25.8834 41.0267 26.0467 42.0067 26.0467C43.22 26.0467 44.1223 25.8523 44.7134 25.4634C45.32 25.0745 45.6234 24.5612 45.6234 23.9234C45.6234 23.4567 45.4523 23.0756 45.11 22.7801C44.7834 22.469 44.3634 22.2278 43.85 22.0567C43.3367 21.8856 42.6367 21.6912 41.75 21.4734C40.5056 21.1778 39.4945 20.8823 38.7167 20.5867C37.9545 20.2912 37.2934 19.8323 36.7334 19.2101C36.1889 18.5723 35.9167 17.7167 35.9167 16.6434C35.9167 15.7412 36.1578 14.9245 36.64 14.1934C37.1378 13.4467 37.8767 12.8556 38.8567 12.4201C39.8523 11.9845 41.0656 11.7667 42.4967 11.7667C43.4923 11.7667 44.4723 11.8912 45.4367 12.1401C46.4012 12.389 47.2334 12.7467 47.9334 13.2134L46.9767 15.5701C46.2612 15.1501 45.5145 14.8312 44.7367 14.6134C43.9589 14.3956 43.2045 14.2867 42.4734 14.2867C41.2756 14.2867 40.3812 14.489 39.79 14.8934C39.2145 15.2978 38.9267 15.8345 38.9267 16.5034C38.9267 16.9701 39.09 17.3512 39.4167 17.6467C39.7589 17.9423 40.1867 18.1756 40.7 18.3467C41.2134 18.5178 41.9134 18.7123 42.8 18.9301C44.0134 19.2101 45.0089 19.5056 45.7867 19.8167C46.5645 20.1123 47.2256 20.5712 47.77 21.1934C48.33 21.8156 48.61 22.6556 48.61 23.7134C48.61 24.6156 48.3612 25.4323 47.8634 26.1634C47.3812 26.8945 46.6423 27.4778 45.6467 27.9134C44.6512 28.349 43.4378 28.5667 42.0067 28.5667Z" fill="#101828" />
                    <path d="M51.3379 15.8734H54.2545V28.3334H51.3379V15.8734ZM52.8078 13.8201C52.279 13.8201 51.8356 13.6567 51.4779 13.3301C51.1201 12.9878 50.9412 12.5678 50.9412 12.0701C50.9412 11.5723 51.1201 11.1601 51.4779 10.8334C51.8356 10.4912 52.279 10.3201 52.8078 10.3201C53.3367 10.3201 53.7801 10.4834 54.1378 10.8101C54.4956 11.1212 54.6745 11.5178 54.6745 12.0001C54.6745 12.5134 54.4956 12.949 54.1378 13.3067C53.7956 13.649 53.3523 13.8201 52.8078 13.8201Z" fill="#101828" />
                    <path d="M61.9326 28.4967C60.9215 28.4967 59.9338 28.3645 58.9693 28.1001C58.0049 27.8356 57.2349 27.5012 56.6593 27.0967L57.7793 24.8801C58.3393 25.2534 59.0082 25.5567 59.786 25.7901C60.5793 26.0078 61.3571 26.1167 62.1193 26.1167C63.8615 26.1167 64.7326 25.6578 64.7326 24.7401C64.7326 24.3045 64.5071 24.0012 64.056 23.8301C63.6204 23.659 62.9126 23.4956 61.9326 23.3401C60.906 23.1845 60.066 23.0056 59.4126 22.8034C58.7749 22.6012 58.2149 22.2512 57.7326 21.7534C57.266 21.2401 57.0326 20.5323 57.0326 19.6301C57.0326 18.4478 57.5226 17.5067 58.5026 16.8067C59.4982 16.0912 60.836 15.7334 62.516 15.7334C63.3715 15.7334 64.2271 15.8345 65.0826 16.0367C65.9382 16.2234 66.6382 16.4801 67.1826 16.8067L66.0626 19.0234C65.0049 18.4012 63.8149 18.0901 62.4926 18.0901C61.6371 18.0901 60.9837 18.2223 60.5326 18.4867C60.0971 18.7356 59.8793 19.0701 59.8793 19.4901C59.8793 19.9567 60.1126 20.2912 60.5793 20.4934C61.0615 20.6801 61.8004 20.859 62.796 21.0301C63.7915 21.1856 64.6082 21.3645 65.246 21.5667C65.8837 21.769 66.4282 22.1112 66.8793 22.5934C67.346 23.0756 67.5793 23.7601 67.5793 24.6467C67.5793 25.8134 67.0737 26.7467 66.0626 27.4467C65.0515 28.1467 63.6749 28.4967 61.9326 28.4967Z" fill="#101828" />
                    <path d="M81.5299 15.8734L75.6966 29.3367C75.1521 30.6901 74.491 31.639 73.7132 32.1834C72.9355 32.7434 71.9943 33.0234 70.8899 33.0234C70.2677 33.0234 69.6532 32.9223 69.0466 32.7201C68.4399 32.5178 67.9421 32.2378 67.5532 31.8801L68.7199 29.7334C68.9999 29.9978 69.3266 30.2078 69.6999 30.3634C70.0888 30.519 70.4777 30.5967 70.8666 30.5967C71.3799 30.5967 71.7999 30.4645 72.1266 30.2001C72.4688 29.9356 72.7799 29.4923 73.0599 28.8701L73.2699 28.3801L67.8332 15.8734H70.8666L74.7866 25.0901L78.7299 15.8734H81.5299Z" fill="#101828" />
                    <path d="M90.2595 15.7334C91.4728 15.7334 92.5539 15.9978 93.5028 16.5267C94.4672 17.0556 95.2217 17.8023 95.7661 18.7667C96.3106 19.7312 96.5828 20.8434 96.5828 22.1034C96.5828 23.3634 96.3106 24.4834 95.7661 25.4634C95.2217 26.4278 94.4672 27.1745 93.5028 27.7034C92.5539 28.2323 91.4728 28.4967 90.2595 28.4967C88.5795 28.4967 87.2495 27.9367 86.2695 26.8167V32.8601H83.3528V15.8734H86.1295V17.5067C86.6117 16.9156 87.2028 16.4723 87.9028 16.1767C88.6184 15.8812 89.4039 15.7334 90.2595 15.7334ZM89.9328 26.0001C91.0061 26.0001 91.885 25.6423 92.5695 24.9267C93.2695 24.2112 93.6195 23.2701 93.6195 22.1034C93.6195 20.9367 93.2695 19.9956 92.5695 19.2801C91.885 18.5645 91.0061 18.2067 89.9328 18.2067C89.2328 18.2067 88.6028 18.3701 88.0428 18.6967C87.4828 19.0078 87.0395 19.459 86.7128 20.0501C86.3861 20.6412 86.2228 21.3256 86.2228 22.1034C86.2228 22.8812 86.3861 23.5656 86.7128 24.1567C87.0395 24.7478 87.4828 25.2067 88.0428 25.5334C88.6028 25.8445 89.2328 26.0001 89.9328 26.0001Z" fill="#101828" />
                    <path d="M106.419 15.7334C107.99 15.7334 109.25 16.1923 110.199 17.1101C111.148 18.0278 111.622 19.389 111.622 21.1934V28.3334H108.706V21.5667C108.706 20.4778 108.449 19.6612 107.936 19.1167C107.422 18.5567 106.691 18.2767 105.742 18.2767C104.669 18.2767 103.821 18.6034 103.199 19.2567C102.577 19.8945 102.266 20.8201 102.266 22.0334V28.3334H99.3489V11.0201H102.266V17.3201C102.748 16.8067 103.339 16.4178 104.039 16.1534C104.754 15.8734 105.548 15.7334 106.419 15.7334Z" fill="#101828" />
                    <path d="M127.386 15.8734V28.3334H124.609V26.7467C124.142 27.3067 123.559 27.7423 122.859 28.0534C122.159 28.349 121.404 28.4967 120.596 28.4967C118.931 28.4967 117.617 28.0378 116.652 27.1201C115.703 26.1867 115.229 24.8101 115.229 22.9901V15.8734H118.146V22.5934C118.146 23.7134 118.394 24.5534 118.892 25.1134C119.406 25.6578 120.129 25.9301 121.062 25.9301C122.104 25.9301 122.929 25.6112 123.536 24.9734C124.158 24.3201 124.469 23.3867 124.469 22.1734V15.8734H127.386Z" fill="#101828" />
                    <path d="M135.054 28.4967C134.043 28.4967 133.055 28.3645 132.091 28.1001C131.127 27.8356 130.357 27.5012 129.781 27.0967L130.901 24.8801C131.461 25.2534 132.13 25.5567 132.908 25.7901C133.701 26.0078 134.479 26.1167 135.241 26.1167C136.983 26.1167 137.854 25.6578 137.854 24.7401C137.854 24.3045 137.629 24.0012 137.178 23.8301C136.742 23.659 136.034 23.4956 135.054 23.3401C134.028 23.1845 133.188 23.0056 132.534 22.8034C131.897 22.6012 131.337 22.2512 130.854 21.7534C130.388 21.2401 130.154 20.5323 130.154 19.6301C130.154 18.4478 130.644 17.5067 131.624 16.8067C132.62 16.0912 133.958 15.7334 135.638 15.7334C136.493 15.7334 137.349 15.8345 138.204 16.0367C139.06 16.2234 139.76 16.4801 140.304 16.8067L139.184 19.0234C138.127 18.4012 136.937 18.0901 135.614 18.0901C134.759 18.0901 134.105 18.2223 133.654 18.4867C133.219 18.7356 133.001 19.0701 133.001 19.4901C133.001 19.9567 133.234 20.2912 133.701 20.4934C134.183 20.6801 134.922 20.859 135.918 21.0301C136.913 21.1856 137.73 21.3645 138.368 21.5667C139.005 21.769 139.55 22.1112 140.001 22.5934C140.468 23.0756 140.701 23.7601 140.701 24.6467C140.701 25.8134 140.195 26.7467 139.184 27.4467C138.173 28.1467 136.797 28.4967 135.054 28.4967Z" fill="#101828" />
                </svg>
      </div>

      {/* Testimonial Text */}
      <div className="max-w-[1216px] mx-auto text-center">
        <p className="text-5xl font-normal">
          We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine working without it.
        </p>
      </div>

      {/* Testimonial Author */}
      <div className="flex flex-col gap-4 items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N2ea1dZFmtHjebaSCxvsXEqQQBnt3cjQDySJR~5ChCaIEdBjTcMqtvWRfSdiCdKU3D91r-9H7JhpHZ372w4lI7TdTTQBilSyf03uqe1kaY7h~QfkkSHok7IkmMSke6u1oUMTqElLaDb9c~5tWDYNgAA~uBySkgf0AkiJgU6s~dwuEzO5gqhF5ecCki8NVg~xYUHstR7nDUj9NcHS6blRimPQiouVZ-I2yLwUgPp7aFN1YntrugPn~owbiu~qCL-ma23MvfCW5zR9RvxbTGppFmvUqzYjYWm9uDZzjGu~UfOnYBfdi7jrLbORCIgbXM~8cgZN7PqW6ECieYz9sGEaTw__"
          alt="Candice Wu"
          className="size-[64px] bg-[#E0E0E0] rounded-full"
        />
      <div className="flex flex-col gap-1 items-center">
      <h4 className="text-base font-semibold">Candice Wu</h4>
      <p className="font-light">Product Manager, Syphus</p>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;

