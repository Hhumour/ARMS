using Arms.Infrastructure.EntityTypeConfigurations;
using Microsoft.EntityFrameworkCore;
using Arms.Domain.Entities;

namespace Arms.Infrastructure
{
    public class ArmsDbContext: DbContext
    {
        public ArmsDbContext(DbContextOptions<ArmsDbContext> options)
            : base(options)
        {
        }
        public DbSet<IdProofType> IdProofType { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EmployeeEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeDetailEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new IdProofTypeEntityTypeConfiguration());
        }
    }
}