import { ArrowUpRight } from "lucide-react";

 const posts = [
    {
      category: 'Design',
      title: 'UI review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      authImg: "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jjIKbEW5PkHa-AmvjYbnvCbgrnx9bTMcIkDokbGU0SgnBlj3R-Q649VAMUihPCjICHeWuzWiE4FkrZ3bTonoUDjVpXYbPNqH06n3VJUdTOAMTbLBCYXAcfvs3kUVvjcBV5UsPpa7lVO7PiL0sLeoPbX~t5av6ZTC2NeJam3NaRydNDOxgBnVBmS534A-h0BFV0kaMCsdZ1BnS~udq6QVbcpzM5CWTsWoAXFyuljyzMY9QhMEilwltDtG6Th7LbuDKEChQMxE~V3YeBV3cnejY5edfARmpnuDRDxUEINTkbqhJlv~yoAW8tb-HBSrmk6EnQ5~djVczoxMHTTGqO2phw__",
      date: '20 Jan 2024',
      img: "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LJN--Bmz5~N-ckcmyR2OLmWkqBfTbV0Al036vJ8f2c2JdOmbxDfLJl204Qj-Xvml1tq6Obn~nZ2Ex8x8Vdkj5GMEVpPchT5iwpOmvggfGUgVgIjTJZxhFZ38EsUFWdO8~HBRwKThwu16KWHA-Q9h6qH8kW9j7U4FVx6Dh0WFQ6LXJcFaslSsj7knUkSfvKZGjNo0lxXY2lLy9omJ7wx8pm8s12WDAgJTIhK8jYZwumnDlKOgrq-7RTpQ6jHnw1hO3e8rQd8JNEUvCdlzTWq~hHX7CD1yz~M7z3F1bLgFlZV0g9aQakY7aCdsey4F36GzoDR29CqRxAEg3zyGRhz-Ig__"
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      authImg: "https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qlg1lWcJ6Wg76OVOkMIufaEqi94LW27yAPO28qi0ziMFpTJI-avDRen2uc4rBWUgrpAAIGppKggzCuGv4rPAKSCl~ZPSNfjJMVgHyDSgcF31~Gm80Hd3AuanS0dOiYmomvYByKPFgJ9IZXLJkKih-avdmnUPlYFwKL2dkLazAtlSaIR9JeRKUp5GLcicdDMbREiD5hUG11ZhxZVDJxIfS4awUABgBJJaDmw~B5Ilv6AENyXQdoUZcfqa~U2LeGHtb7EuCkKA2XsyL5PrrhcwHKtXr46M2eIqu8a-E1U~4IwBTCo1IgmEErEVC2YFAghpo6mYolQ~xJJrkFpsv0o8Gw__",
      date: '19 Jan 2024',
      img: "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MtdElJ6LXFgT4eQxO0UWavfijizQ~bpWTUrP9mDCR~oFD5UrW-u6kqfJq1K6UWHPWtF2LrtHbJxz3nPGbV5j5KgHdhIdSp0FHuLytqc5omeNbdmB5BTES3M2jHYS0niwiQAjp5X6yh6fGfpgUErbFiGEKHSAeaunGwSBE9Akl85u4jdQ~WpG7DByeC9bZcQoszzchVQ8HjbhGn5LFQtazYg7dm1hI99GFoM7cNuX0UHXNjuBzc53J-kTGoRYwUgMXmRMTq8XgAjwrd5TPFErpOWTmBwQQV-WVroViF6Y86PWpZBbEY-~uyybGmdFhkIwUP8qI74oIbWVV2zSSk24-Q__"
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      authImg: "https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tyBxthU~6p012Kz6VdmsjS7pasbZekk29HiCFSmmb-XgbdopRTi2qTOj6YWPQghIJ7cFcDk98h2SUTYNx5gxciuTRioi6t~T0b9b5pAgpYKkqhEUcSMeTZaXj7jheuEiHSpR2vv73JgrgVoqluC8mUOxdS6bOs~Z8Or5uYN6RK32W7HkjNO2nHy82PGTG49GzkNv6nde9LcX2P1-EV1Imjx17mi6eypEUw31eXlDUaYBROq4s1q1Aqpghx1FXfLQwwJkYGhOcUOQF6uX7zQyft8K83x0-rk15Y4gwlj24CUsg3pt7fAOJ5LQMsPwOBJ9lcpRu2NIXYCcgfd3tkWPmw__",
      date: '18 Jan 2024',
      img: "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hccfhYsF~gfscuiBwDA-MlE0j6HHYXkkbPNd0HpDrLsGh7VQTtZqJoTNTp-N47HVVMAVZAFnGyI1phBp47UEWteJBPUa8L2DvMAI-X1DWdCWvzE8Ub6SHq2GrWZ94wq6-mTj0zu8YWzmQopJL0AlNPwVcmdWqahCVk4yoBQuHmS6Top-dFZ3wffgwMNm10EUw9xh9aGsc3KZ-~I~DUw~ZYxMFj4TIG2Si5Lpm19BwYlURMcQ2kCSyirDdv3lCUTm-U35fHoSQvXs6jXiPUqFyHSCvEYXlJAmNeRtVE71CxFd-KVfZnGXza8IlwzdorrGGRoGfKHnywAC3OvOl6n22A__"
    },
  ];
const Blog = () => {
  
  return (
    <div className="mx-auto max-w-screen-xl py-8 px-3 md:px-0 ">
        <div className="flex flex-col gap-16">
            {/*Text Header */}
            <div className="flex justify-between">
                <div className="" id="left-side">
                    <span className="text-[#E63F3A] font-semibold">Our Blog</span>
                    <h1 className="text-4xl font-semibold mt-3 mb-5">Latest blog posts</h1>
                    <p className="text-lg font-light text-slate-500">Tool and strategies modern teams need to help their companies grow.</p>
                </div>

                <div className="hidden md:block" id="right-side">
                    <button className="py-3 px-5 bg-[#E63F3A] font-semibold text-white rounded-lg">View All Posts</button>
                </div>
            </div>

            {/* Image Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        {/*image */}
                        <div className="w-[384px] h-[240px]">
                            <img src={post.img}
                            alt="img"
                            className="w-full h-full object-cover"  />
                        </div>

                        {/* image info */}
                        <div className="max-w-[384px]">
                            <div className="text-[#E63F3A] font-semibold text-sm">{post.category}</div>

                            <div className="flex justify-between items-center my-2">
                                <h1 className="font-semibold text-2xl">{post.title}</h1>
                                <span><ArrowUpRight className="size-6" /></span>
                            </div>

                            <div className="tracking-wide text-slate-500 font-light">{post.description}</div>

                            <div className="flex gap-3 mt-6">
                                <div className="size-10">
                                    <img src={post.authImg}
                                    alt={post.author}
                                    className="w-full h-full rounded-full bg-slate-200 object-cover" />
                                </div>
                                <div className="text-sm">
                                    <h1 className="font-semibold">{post.author}</h1>
                                    <p className="font-light">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Blog;