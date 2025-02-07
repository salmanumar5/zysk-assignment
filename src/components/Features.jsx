import { Inbox, Zap, BarChart3, MessageCircle, Share2, Users } from "lucide-react";

  const features = [
  {
    icon: <Inbox className="w-6 h-6" />,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Our people make the difference",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];


const Features = () => {
 
  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
      <div className="text-center mb-16">
        <h2 className="text-red-500 text-base font-semibold mb-3">Features</h2>
        <h1 className="text-4xl font-semibold mb-6">Analytics that feels like it&apos;s from the future</h1>
        <p className="text-gray-600 text-xl font-light tracking-wider max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage,
           <br/>
           and retain more users. Trusted
          by over 4,000 startups.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex size-12 items-center mx-auto border rounded-[10px] justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 tracking-wider font-light text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;