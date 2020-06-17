<<<<<<< HEAD
﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using Arms.Domain.Entities;
using System.Collections.Generic;
using System.Text;

namespace Arms.Infrastructure.EntityTypeConfigurations
{
    internal class IdProofTypeEntityTypeConfiguration: IEntityTypeConfiguration<IdProofType>
=======
﻿using System;
using System.Collections.Generic;
using System.Text;
using Arms.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Arms.Infrastructure.EntityTypeConfigurations
{
    internal class IdProofTypeEntityTypeConfiguration : IEntityTypeConfiguration<IdProofType>
>>>>>>> 3cf9cb49801a41b097d786510f638d824d5f88fb
    {
        public void Configure(EntityTypeBuilder<IdProofType> builder)
        {
            builder.ToTable("IdProofType", "ARMS");

            builder.Property(e => e.Id).HasColumnName("id");

            builder.Property(e => e.Code)
                .HasColumnName("code")
                .HasMaxLength(57)
<<<<<<< HEAD
                .IsUnicode(false)
                .HasComputedColumnSql("('CYGPFID'+CONVERT([nvarchar](50),[id]))");

            builder.Property(e => e.Name)
                .HasColumnName("name")
                .HasMaxLength(50)
                .IsUnicode(false);

=======
                .HasComputedColumnSql("('CYGPFID'+CONVERT([nvarchar](50),[id]))");

>>>>>>> 3cf9cb49801a41b097d786510f638d824d5f88fb
            builder.Property(e => e.CreatedAt)
                .HasColumnName("createdAt")
                .HasDefaultValueSql("(sysdatetime())");

            builder.Property(e => e.CreatedBy)
<<<<<<< HEAD
                .HasColumnName("createdBy")
                .HasMaxLength(50)
                .IsUnicode(false);
=======
                .IsRequired()
                .HasColumnName("createdBy")
                .HasMaxLength(50);
>>>>>>> 3cf9cb49801a41b097d786510f638d824d5f88fb

            builder.Property(e => e.ModifiedAt)
                .HasColumnName("modifiedAt")
                .HasDefaultValueSql("(sysdatetime())");

            builder.Property(e => e.ModifiedBy)
<<<<<<< HEAD
                .HasColumnName("modifiedBy")
                .HasMaxLength(50)
                .IsUnicode(false);

        }

    }
}
=======
                .IsRequired()
                .HasColumnName("modifiedBy")
                .HasMaxLength(50);

            builder.Property(e => e.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasMaxLength(50)
                .IsUnicode(false);
        }
    }
}
>>>>>>> 3cf9cb49801a41b097d786510f638d824d5f88fb
