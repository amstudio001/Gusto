import '../styles/philosophy.css'
import { useLanguage } from '../context/LanguageContext'

export default function Philosophy() {
  const { language } = useLanguage()
  const ru = language === 'ru'
  return (
<section className="phi"><div className="wrap rv"><span className="eyebrow">{ru ? 'Наша философия' : 'Our Philosophy'}</span><h2>{ru ? 'Что нас ведёт.' : 'What guides us.'}</h2>
  <div className="grid4">
    <div><b>01</b><h3>{ru ? 'Традиция' : 'Tradition'}</h3><p>{ru ? 'Рецепты, культура и опыт бережно передаются дальше с лёгким современным акцентом.' : 'Recipes, culture, and experience are carried forward with respect and a light modern touch.'}</p></div>
    <div><b>02</b><h3>{ru ? 'Качество' : 'Quality'}</h3><p>{ru ? 'Мы внимательно относимся к продукту, приготовлению и маленьким деталям, которые делают стол особенным.' : 'We pay attention to the ingredient, the preparation, and the small details that make a table memorable.'}</p></div>
    <div><b>03</b><h3>{ru ? 'Гостеприимство' : 'Hospitality'}</h3><p>{ru ? 'Тёплый приём начинается у двери и продолжается в каждом блюде и разговоре.' : 'A warm welcome begins at the door and continues through every course and conversation.'}</p></div>
    <div><b>04</b><h3>{ru ? 'Впечатление' : 'Experience'}</h3><p>{ru ? 'Еда, пространство, сервис и атмосфера соединяются в единое выражение Gusto.' : 'Food, space, service, and atmosphere come together as one generous expression of Gusto.'}</p></div>
  </div></div></section>
  )
}
