import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Новая коллекция</Badge>,
    title: "Часот. Время на твоей стороне.",
    showButton: true,
    buttonText: 'Купить сейчас'
  },
  {
    id: 'about',
    title: 'Зачем Часот?',
    content: 'Мы создали часы, которые сочетают чёткий цифровой дисплей и лаконичный дизайн — чтобы время всегда было у тебя перед глазами.'
  },
  {
    id: 'features',
    title: 'Что внутри',
    content: 'Яркий LED-экран, точный кварцевый механизм, влагозащита и автономность до 2 лет без замены батареи.'
  },
  {
    id: 'testimonials',
    title: 'Говорят покупатели',
    content: '«Купил Часот месяц назад — не могу снять. Читается в любую погоду, выглядит дорого. Лучшая покупка года.»'
  },
  {
    id: 'join',
    title: 'Закажи прямо сейчас',
    content: 'Доставка по всей России. Бесплатный возврат в течение 30 дней. Гарантия 1 год.',
    showButton: true,
    buttonText: 'Оформить заказ'
  },
]