/**
 * UUID
 * @pattern ^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$
 * @example "123e4567-e89b-12d3-a456-426655440000"
 *
 */
export type UUID = string;

export type SessionUser = {
  email: string;
  name: string;
  id: UUID;
  scopes: string[];
};