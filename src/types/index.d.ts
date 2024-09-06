import type { JwtPayload } from "@clerk/types";

export type UserPublicMetadata = {
  first_name?: string;
  role?: string;
  avatar?: string;
};

export type SessionClaims = JWTPayload & {
  meta?: UserPublicMetadata;
};
