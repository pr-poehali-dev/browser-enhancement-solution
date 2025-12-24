import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Консалтинг',
      description: 'Комплексный анализ вашего бизнеса и разработка стратегии развития'
    },
    {
      icon: 'Rocket',
      title: 'Автоматизация',
      description: 'Внедрение современных решений для оптимизации бизнес-процессов'
    },
    {
      icon: 'Users',
      title: 'Обучение',
      description: 'Профессиональное развитие команды и повышение квалификации'
    },
    {
      icon: 'LineChart',
      title: 'Аналитика',
      description: 'Глубокий анализ данных и аналитика для принятия решений'
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды цифровой трансформации 2024',
      excerpt: 'Разбираем главные тенденции в автоматизации бизнеса',
      date: '15 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/94bd0d58-164e-407c-bf47-bf67071cf8ca/files/ea119703-db22-4df9-9b41-2465ce93483b.jpg'
    },
    {
      title: 'Как построить эффективную команду',
      excerpt: 'Секреты успешного управления персоналом и мотивации',
      date: '10 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/94bd0d58-164e-407c-bf47-bf67071cf8ca/files/8255858b-043b-4bb5-a9fb-63930fede234.jpg'
    },
    {
      title: 'Инновации в сфере услуг',
      excerpt: 'Технологии будущего уже сегодня в вашем бизнесе',
      date: '5 декабря 2024',
      image: 'https://cdn.poehali.dev/projects/94bd0d58-164e-407c-bf47-bf67071cf8ca/files/5915e2d3-f40d-451e-a650-b2447c4e7dee.jpg'
    }
  ];

  const teamMembers = [
    { name: 'Алексей Петров', role: 'CEO & Основатель', icon: 'User' },
    { name: 'Мария Иванова', role: 'Директор по развитию', icon: 'User' },
    { name: 'Дмитрий Козлов', role: 'Технический директор', icon: 'User' },
    { name: 'Елена Смирнова', role: 'Руководитель отдела аналитики', icon: 'User' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-2xl font-heading font-bold gradient-text">ServicePro</h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Связаться</Button>
          </div>
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Поиск через Google..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 bg-background/60"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Search" size={20} />
            </button>
          </form>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
              Ваш партнёр в
              <span className="gradient-text block mt-2">цифровой трансформации</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Предоставляем комплексные услуги для роста вашего бизнеса с использованием передовых технологий
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
                Начать сотрудничество
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 font-bold">Наши возможности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Делимся экспертизой и актуальными трендами индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-2">
                    {post.date}
                  </CardDescription>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">О нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Команда профессионалов с многолетним опытом в сфере цифровых решений
            </p>
          </div>
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in">
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-center">
                  Мы — команда энтузиастов, которые верят в силу технологий для трансформации бизнеса. 
                  С 2015 года мы помогаем компаниям разных масштабов достигать своих целей через 
                  инновационные решения и персональный подход. Наша миссия — сделать передовые технологии 
                  доступными для каждого бизнеса.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={member.icon} className="text-white" size={40} />
                  </div>
                  <CardTitle className="font-heading">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          <Card className="border-2 animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full gradient-bg text-white hover:opacity-90 transition-opacity">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in">
              <Icon name="Mail" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">info@servicepro.com</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Icon name="Phone" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-medium">Телефон</p>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-medium">Адрес</p>
              <p className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 mt-20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold gradient-text mb-4">ServicePro</h3>
          <p className="text-muted-foreground mb-6">
            Ваш партнёр в цифровой трансформации
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 ServicePro. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;