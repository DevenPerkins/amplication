import { forwardRef, Module } from "@nestjs/common";
import { PrismaService, PrismaModule } from "../../prisma";
import { ResourceModule } from "../resource/resource.module";
import { PermissionsModule } from "../permissions/permissions.module";
import { GitResolver } from "./git.resolver";
import { GitProviderService } from "./git.provider.service";
import { BillingModule } from "../billing/billing.module";
@Module({
  imports: [
    PermissionsModule,
    forwardRef(() => ResourceModule),
    PrismaModule,
    BillingModule,
  ],
  providers: [GitProviderService, GitResolver, PrismaService],
  exports: [GitProviderService],
})
export class GitProviderModule {}
