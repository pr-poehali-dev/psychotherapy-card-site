import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Семейная психотерапия</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#approach" className="text-foreground hover:text-primary transition-colors">Подход</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={20} />
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Подход</a>
              <a href="#blog" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Семейный и парный психотерапевт
            </h2>
            <p className="text-2xl text-muted-foreground mb-4 font-medium">
              Когда в отношениях сложно — с партнёром, родителями или с собой
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Помогаю парам и индивидуальным клиентам разобраться в конфликтах, тревоге, эмоциональной зависимости и болезненных сценариях, чтобы вернуть опору, ясность и живой контакт.
            </p>
            <Button size="lg" className="rounded-full px-8 text-base">
              Записаться на консультацию
            </Button>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/db47f529-cda9-415d-ab95-0b9cdb020e7a.jpg"
              alt="Уютный кабинет психотерапевта"
              className="rounded-2xl shadow-2xl w-full h-[550px] object-cover"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center italic">
              Безопасное пространство для честного разговора и глубоких изменений
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/e7b5c828-b0f5-4e03-aba1-3fdb889bb539.jpg"
                alt="Психотерапевт"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Обо мне</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Я — семейный и парный психотерапевт, гештальт-терапевт.
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Работаю с парами и индивидуальными клиентами, которые столкнулись с кризисами в отношениях, тревогой, эмоциональной зависимостью, последствиями психологических травм и сложностями в детско-родительских отношениях.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">В своей практике я помогаю тем, кто:</h3>
              <div className="space-y-3">
                {[
                  'застрял в конфликтах и не может договориться',
                  'переживает кризис, развод, измену или утрату',
                  'находится в созависимых или абьюзивных отношениях',
                  'испытывает тревогу, панические атаки, ощущение одиночества',
                  'запутался в отношениях с родителями или взрослыми детьми',
                  'потерял контакт с собой и не понимает, чего хочет на самом деле'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-base text-foreground mt-8 mb-2 leading-relaxed font-medium">
                Я работаю глубоко, бережно и честно — без давления и оценок.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Моя задача — помочь вам понять, что с вами происходит, вернуть опору в себе и выстроить более здоровые отношения с собой и близкими.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Квалификация и образование</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <Icon name="GraduationCap" className="text-primary flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Базовое образование</h4>
                    <p className="text-muted-foreground text-sm">Московский Университет Открытого Образования — практическая психология</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <Icon name="Award" className="text-primary flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Специализация</h4>
                    <p className="text-muted-foreground text-sm">Московский Институт Гештальт-терапии и Консультирования — гештальт-терапевт</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 md:col-span-2">
                <div className="flex items-start gap-4">
                  <Icon name="BookOpen" className="text-primary flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Повышение квалификации</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <p className="text-muted-foreground text-sm">• Системная семейная психотерапия</p>
                      <p className="text-muted-foreground text-sm">• Песочная терапия</p>
                      <p className="text-muted-foreground text-sm">• Сказкотерапия</p>
                      <p className="text-muted-foreground text-sm">• Работа с кризисами</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Работаю в направлениях: <span className="text-foreground font-medium">гештальт-терапия, системная семейная терапия, песочная терапия</span>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            Индивидуальная, парная и семейная психотерапия для взрослых с различными запросами
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Парная и семейная терапия',
                description: 'Конфликты, кризисы, утрата близости, повторяющиеся ссоры, трудности в диалоге, измены, сложные решения.'
              },
              {
                icon: 'Link',
                title: 'Созависимые и эмоционально зависимые отношения',
                description: 'Когда сложно уйти, сложно остаться и постоянно больно — помогаю найти выход и восстановить границы.'
              },
              {
                icon: 'CloudRain',
                title: 'Кризисы и травматичный опыт',
                description: 'Развод, расставание, утрата близкого, пережитое насилие — работа с болью и восстановление опоры.'
              },
              {
                icon: 'Users',
                title: 'Детско-родительские отношения',
                description: 'Конфликты с родителями, сепарация, сложные отношения со взрослыми детьми, чувство вины и долга.'
              },
              {
                icon: 'AlertCircle',
                title: 'Тревога и панические атаки',
                description: 'Постоянное напряжение, страхи, ПТСР, фобии, ощущение потери контроля.'
              },
              {
                icon: 'Compass',
                title: 'Самооценка и идентичность',
                description: 'Поиск себя, нестабильная самооценка, ощущение пустоты, вопрос «кто я и чего хочу».'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon} className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Подход</h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                В работе я опираюсь на гештальт-терапию и системную семейную терапию.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-primary">•</span> Гештальт-подход помогает:
                  </h3>
                  <div className="space-y-2 ml-5">
                    {[
                      'лучше понимать свои чувства и реакции',
                      'замечать, где вы теряете контакт с собой',
                      'учиться осознавать свои потребности и границы'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-primary">•</span> Системная семейная терапия позволяет:
                  </h3>
                  <div className="space-y-2 ml-5">
                    {[
                      'увидеть отношения как систему, а не искать «виноватого»',
                      'понять, как формируются конфликты и зависимые сценарии',
                      'менять не отдельные реакции, а саму динамику отношений'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-base text-foreground mt-8 leading-relaxed font-medium italic">
                Я работаю в темпе клиента, создавая безопасное пространство, где возможно настоящее изменение.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5dc69bd4-395b-4140-ba49-60db54873487/files/983b791e-25d0-4e9a-af6d-68e546c8d84d.jpg"
                alt="Безопасное пространство терапии"
                className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Блог</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Статьи о психологии отношений и ментальном здоровье
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Почему мы снова и снова попадаем в одни и те же отношения',
                excerpt: 'О повторяющихся сценариях, зависимости и выборе партнёра.',
                readTime: '8 мин'
              },
              {
                title: 'Тревога и панические атаки: что происходит и как с этим работать',
                excerpt: 'Простым языком о механизмах тревоги и пути выхода.',
                readTime: '6 мин'
              },
              {
                title: 'Границы в семье: как сохранить близость и не потерять себя',
                excerpt: 'Про здоровые границы с партнёром, родителями и детьми.',
                readTime: '7 мин'
              }
            ].map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Icon name="Clock" size={14} />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Читать статью
                  <Icon name="ArrowRight" size={16} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-4 text-lg">
            Свяжитесь со мной для записи на консультацию
          </p>
          <p className="text-center text-foreground mb-12 text-base">
            <Icon name="MapPin" size={18} className="inline mr-2 text-primary" />
            Город: <span className="font-medium">Калининград</span>
            <span className="mx-3">•</span>
            Формат работы: <span className="font-medium">очно и онлайн</span>
          </p>
          
          <Card className="p-8 md:p-10 max-w-xl mx-auto border-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Ваше имя</label>
                <Input
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Телефон / E-mail</label>
                <Input
                  placeholder="+7 (999) 123-45-67 или email@example.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Кратко опишите запрос</label>
                <Textarea
                  placeholder="Что вас привело к решению обратиться за помощью?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[140px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full text-base py-6">
                Записаться на консультацию
              </Button>
            </form>
            
            <p className="text-center text-muted-foreground mt-8 text-sm leading-relaxed italic">
              Если вы чувствуете, что больше не хотите справляться с этим в одиночку — вы можете обратиться за поддержкой.
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Семейный и парный психотерапевт • Калининград
          </p>
          <p className="text-muted-foreground text-xs">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
