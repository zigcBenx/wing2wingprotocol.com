import { Lightbulb, Heart, Clock, MessageSquare, Sparkles, Shield } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Authenticity",
      description: "We value genuine connections and honest communication above all else.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Simplicity",
      description: "We believe in straightforward solutions that anyone can understand and use.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Playful Innovation",
      description: "We combine creativity with nostalgia to create delightful experiences.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliability",
      description: "We're consistently there for our users, even if our pigeons take their time.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Clarity",
      description: "We communicate with transparency and straightforwardness.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Nostalgia",
      description: "We embrace the charm of simpler times while looking forward.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col space-y-3 p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
            {value.icon}
          </div>
          <h3 className="text-xl font-bold">{value.title}</h3>
          <p className="text-slate-400">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
