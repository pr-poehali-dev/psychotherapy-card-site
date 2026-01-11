import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Психотерапия</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#approach" className="text-foreground hover:text-primary transition-colors">Подход</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Путь к себе начинается здесь
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональная психотерапия для взрослых. Я помогаю разобраться в себе, найти внутренние ресурсы и обрести гармонию
            </p>
            <Button size="lg" className="rounded-full px-8">
              Записаться на консультацию
            </Button>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/49086c8a-7616-4ae8-aeb6-fcf90ed9dd78.jpg"
              alt="Уютный кабинет психотерапевта"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/c952aba2-6100-436c-9499-7f34270a90cb.jpg"
              alt="Психотерапевт"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-foreground mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Я практикующий психотерапевт с опытом работы более 10 лет. Моя специализация — индивидуальная психотерапия для взрослых с различными жизненными запросами.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Я получила образование в ведущих психологических институтах и постоянно повышаю свою квалификацию. Мой подход основан на уважении, эмпатии и профессионализме.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="GraduationCap" className="text-primary" size={24} />
                <span className="text-foreground">Магистр психологии, МГУ</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Award" className="text-primary" size={24} />
                <span className="text-foreground">Сертифицированный психотерапевт</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" className="text-primary" size={24} />
                <span className="text-foreground">Более 1000 часов практики</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Индивидуальная психотерапия для взрослых с различными запросами и проблемами
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Личные отношения',
                description: 'Работа с проблемами в отношениях, одиночеством, поиском партнера'
              },
              {
                icon: 'Brain',
                title: 'Тревога и стресс',
                description: 'Помощь при тревожных расстройствах, панических атаках, хроническом стрессе'
              },
              {
                icon: 'Compass',
                title: 'Самопознание',
                description: 'Поиск жизненного пути, работа с самооценкой, личностный рост'
              },
              {
                icon: 'CloudRain',
                title: 'Депрессия',
                description: 'Поддержка при депрессивных состояниях, апатии, потере смысла'
              },
              {
                icon: 'Briefcase',
                title: 'Карьера',
                description: 'Профессиональное выгорание, выбор пути, рабочие конфликты'
              },
              {
                icon: 'Sparkles',
                title: 'Кризисы',
                description: 'Помощь в сложных жизненных ситуациях, потерях, переменах'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Мой подход</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                В своей работе я использую интегративный подход, сочетая различные методы психотерапии в зависимости от вашего запроса.
              </p>
              <div className="space-y-4">
                {[
                  'Гештальт-терапия для работы с эмоциями',
                  'Когнитивно-поведенческая терапия для изменения паттернов',
                  'Психодинамический подход для глубинной работы',
                  'Экзистенциальная терапия для поиска смысла'
                ].map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary" size={16} />
                    </div>
                    <span className="text-foreground">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/37a55d0f-d86d-44b0-8289-347eb3345610.jpg"
                alt="Спокойная атмосфера"
                className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Блог</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Статьи о психологии и ментальном здоровье
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Как справиться с тревогой',
                excerpt: 'Практические техники для работы с тревожными состояниями в повседневной жизни',
                date: '15 января 2024'
              },
              {
                title: 'Границы в отношениях',
                excerpt: 'Почему важно уметь говорить "нет" и как это делать экологично',
                date: '10 января 2024'
              },
              {
                title: 'Работа с самооценкой',
                excerpt: 'Откуда берется низкая самооценка и как начать её повышать',
                date: '5 января 2024'
              }
            ].map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Читать далее →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь со мной для записи на консультацию
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">therapy@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, д. 10</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Психотерапия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
