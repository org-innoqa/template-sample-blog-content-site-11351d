CREATE TABLE IF NOT EXISTS posts (
  id bigint generated always as identity primary key,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  created_at timestamptz default now()
);

INSERT INTO posts (title, content, category) VALUES 
('React ile Blog Yapımı', 'Bu yazıda React ve Tailwind kullanarak nasıl blog yapılacağını anlatıyorum...', 'Teknoloji'),
('PostgreSQL ve PostgREST', 'Veritabanı yönetimi için harika bir ikili...', 'Veritabanı');