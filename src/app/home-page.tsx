'use client';

import { useAuth } from '@/context/better-auth.context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  PlayCircle,
  Users,
  Trophy,
  Calendar,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  if (isAuthenticated) {
    return null; // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-primary/20 text-white hover:bg-primary/30">
                ⚽ Premium Mini Soccer Experience
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mini Soccer
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The ultimate platform for mini soccer enthusiasts. Create teams,
              organize matches, and track your performance.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/dashboard">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Open Dashboard
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/signin">Masuk</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Tentang Mini Soccer Academy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Platform terdepan untuk manajemen lapangan mini soccer yang
              menyediakan solusi lengkap untuk booking lapangan, pengelolaan
              tim, tournament, dan sistem pembayaran terintegrasi. Kami membantu
              pemilik lapangan dan pemain untuk mendapatkan pengalaman terbaik
              dalam olahraga mini soccer.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Kualitas Terbaik</h3>
                <p className="text-sm text-muted-foreground">
                  Lapangan berkualitas tinggi dengan fasilitas modern
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Komunitas Aktif</h3>
                <p className="text-sm text-muted-foreground">
                  Bergabung dengan ribuan pemain dan tim aktif
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Dukungan pelanggan yang responsif setiap saat
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fitur Unggulan Platform Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dari booking lapangan hingga manajemen tournament, kami
              menyediakan semua tools yang Anda butuhkan untuk pengalaman mini
              soccer terbaik.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Booking Lapangan',
                description:
                  'Sistem booking lapangan yang mudah dan real-time dengan konfirmasi otomatis.',
                delay: 0.1,
              },
              {
                icon: Calendar,
                title: 'Dashboard Keuangan',
                description:
                  'Pantau pendapatan, pengeluaran, dan laporan keuangan secara detail.',
                delay: 0.2,
              },
              {
                icon: Trophy,
                title: 'Manajemen Tim/Club',
                description:
                  'Kelola tim, pemain, dan statistik performa dengan mudah.',
                delay: 0.3,
              },
              {
                icon: MapPin,
                title: 'Pengelolaan Inventaris',
                description:
                  'Manajemen peralatan lapangan dan inventaris secara terpusat.',
                delay: 0.4,
              },
              {
                icon: Clock,
                title: 'Notifikasi Real-time',
                description:
                  'Dapatkan update booking, pembayaran, dan jadwal secara real-time.',
                delay: 0.5,
              },
              {
                icon: PlayCircle,
                title: 'Tournament System',
                description:
                  'Sistem tournament lengkap dengan bracket dan manajemen skor.',
                delay: 0.6,
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      </motion.div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Statistik Platform Kami
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dipercaya oleh ribuan pengguna di seluruh Indonesia
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Lapangan Terdaftar' },
              { number: '5000+', label: 'Pengguna Aktif' },
              { number: '25000+', label: 'Total Booking' },
              { number: '200+', label: 'Tim/Club' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cara Kerja Platform Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proses booking yang mudah dan cepat dalam 4 langkah sederhana
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Daftar Akun',
                description: 'Buat akun gratis dan lengkapi profil Anda',
                icon: Users,
              },
              {
                step: '02',
                title: 'Pilih Lapangan',
                description: 'Pilih lapangan dan waktu yang tersedia',
                icon: MapPin,
              },
              {
                step: '03',
                title: 'Konfirmasi Booking',
                description: 'Konfirmasi detail booking dan lakukan pembayaran',
                icon: Calendar,
              },
              {
                step: '04',
                title: 'Main & Enjoy',
                description: 'Datang ke lapangan dan nikmati permainan',
                icon: PlayCircle,
              },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="absolute top-2 left-12 bg-primary/10 text-primary font-bold text-sm px-2 py-1 rounded">
                      {step.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gray-200" />
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Apa Kata Pengguna Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Testimoni dari pemilik lapangan dan pemain yang sudah merasakan
              manfaatnya
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Budi Santoso',
                role: 'Pemilik Lapangan Soccer Star',
                content:
                  'Platform ini sangat membantu mengelola booking lapangan. Sistem pembayaran otomatis dan dashboard yang informatif membuat bisnis saya lebih efisien.',
                rating: 5,
              },
              {
                name: 'Andi Wijaya',
                role: 'Kapten Tim FC Warriors',
                content:
                  'Booking lapangan jadi sangat mudah. Tim kami bisa dengan cepat menemukan lapangan yang tersedia dan melakukan pembayaran online. Sangat recommended!',
                rating: 5,
              },
              {
                name: 'Rudi Hartono',
                role: 'Manager Club Futsal Pro',
                content:
                  'Fitur manajemen tim dan tournament sangat lengkap. Kami bisa mengorganisir kompetisi dengan mudah dan semua data tersimpan rapi.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Daftar Harga & Paket
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: 'Gratis',
                period: '',
                features: [
                  'Booking lapangan standar',
                  'Maksimal 5 booking per bulan',
                  'Support email',
                  'Akses fitur dasar',
                ],
                popular: false,
              },
              {
                name: 'Premium',
                price: 'Rp 99.000',
                period: '/bulan',
                features: [
                  'Booking unlimited',
                  'Dashboard keuangan lengkap',
                  'Manajemen tim/club',
                  'Support prioritas',
                  'Akses tournament',
                  'Analytics detail',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: [
                  'Semua fitur Premium',
                  'Multiple venues',
                  'White-label solution',
                  'API access',
                  'Dedicated support',
                  'Custom features',
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full ${
                    plan.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 ${
                        plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/signup">
                        {plan.name === 'Enterprise'
                          ? 'Hubungi Kami'
                          : 'Pilih Paket'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pertanyaan yang sering diajukan beserta jawabannya
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Bagaimana cara melakukan booking lapangan?',
                answer:
                  'Anda dapat melakukan booking dengan mendaftar akun, memilih lapangan dan waktu yang tersedia, kemudian melakukan konfirmasi pembayaran melalui platform kami.',
              },
              {
                question: 'Metode pembayaran apa saja yang diterima?',
                answer:
                  'Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, DANA), dan kartu kredit/debit.',
              },
              {
                question: 'Bisakah membatalkan booking yang sudah dibuat?',
                answer:
                  'Ya, Anda dapat membatalkan booking maksimal 2 jam sebelum waktu bermain. Pembatalan akan dikenakan biaya administrasi 10% dari total booking.',
              },
              {
                question: 'Apakah ada diskon untuk booking berulang?',
                answer:
                  'Ya, kami menyediakan program membership dengan berbagai benefit termasuk diskon khusus untuk booking berulang dan akses prioritas ke lapangan premium.',
              },
              {
                question: 'Bagaimana jika terjadi kendala teknis saat booking?',
                answer:
                  'Tim support kami siap membantu 24/7 melalui chat, email, atau WhatsApp. Anda juga dapat menghubungi customer service kami untuk bantuan langsung.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ada pertanyaan? Tim kami siap membantu Anda 24/7
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi form di bawah untuk menghubungi tim support kami
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                  <Button className="w-full">Kirim Pesan</Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telepon</h3>
                  <p className="text-muted-foreground">+62 812 1392 7692</p>
                  <p className="text-sm text-muted-foreground">
                    Senin - Minggu, 08:00 - 22:00
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    support@minisoccer.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Respon dalam 2-4 jam
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Alamat Kantor</h3>
                  <p className="text-muted-foreground">
                    Jl. Soccer Field No.39
                    <br />
                    Jakarta Selatan 12630
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold mb-3">Ikuti Kami</h3>
                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Youtube className="h-5 w-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Siap Memulai?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Bergabunglah dengan ribuan pemain dan pemilik lapangan yang
            mempercayai platform kami untuk pengalaman mini soccer terbaik.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/signup">Daftar Sekarang</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signin">Masuk</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-secondary/50 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Mini Soccer Academy
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Professional mini soccer platform with high-standard facilities
                and experienced management.
              </p>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-primary mb-2">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Jl. Soccer Field No.39, Jakarta Selatan 12630
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">
                    +62 812 1392 7692
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">Open Daily</span>
                </div>
              </div>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Leagues
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>League A</li>
                <li>League B</li>
                <li>Tournament</li>
              </ul>
            </motion.div>

            {/* Support & Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Social Media & Copyright */}
          <motion.div
            className="mt-6 pt-4 border-t border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">
                  Follow Us:
                </span>
                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Youtube className="h-4 w-4 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="text-center sm:text-right text-muted-foreground text-sm">
                <p>&copy; 2024 Mini Soccer Academy. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
