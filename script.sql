-- Insert users data into the database
INSERT INTO users (name, email, password, role, createdAt, updatedAt)
VALUES
('Ana Souza', 'ana@turismo.com', 'senha123', 'admin', NOW(), NOW()),
('Carlos Mendes', 'carlos@turismo.com', 'senha456', 'guia', NOW(), NOW()),
('Mariana Lima', 'mariana@turismo.com', 'senha789', 'agente', NOW(), NOW()),
('Ricardo Alves', 'ricardo@cliente.com', 'senha321', 'cliente', NOW(), NOW()),
('Hotel Paraíso', 'paraiso@hotel.com', 'senha654', 'parceiro', NOW(), NOW());
