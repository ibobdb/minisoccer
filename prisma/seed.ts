import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create roles
  const roles = [
    {
      name: 'admin',
      description: 'Full system administrator with all permissions',
    },
    {
      name: 'manager',
      description: 'Manager with team oversight permissions',
    },
    {
      name: 'team_lead',
      description: 'Team leader with project management permissions',
    },
    {
      name: 'user',
      description: 'Regular user with standard permissions',
    },
    {
      name: 'employee',
      description: 'Employee with work-related permissions',
    },
    {
      name: 'investor',
      description: 'Investor with financial data access permissions',
    },
  ];

  console.log('👤 Creating roles...');

  for (const role of roles) {
    const existingRole = await prisma.roles.findUnique({
      where: { name: role.name },
    });

    if (!existingRole) {
      await prisma.roles.create({
        data: role,
      });
      console.log(`✅ Created role: ${role.name}`);
    } else {
      console.log(`⏭️  Role already exists: ${role.name}`);
    }
  }

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
