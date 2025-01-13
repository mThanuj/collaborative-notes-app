import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const timestampFields = {
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" })
    .defaultNow()
    .$onUpdate(() => sql`now() AT TIME ZONE 'UTC'`),
};

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  kindeId: varchar("kinde_id", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  fullName: varchar("full_name", { length: 255 }),
  phone: varchar("phone", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  picture: text("picture"),
  ...timestampFields,
});

export const notes = pgTable("notes", {
  id: uuid().primaryKey().defaultRandom(),
  creatorId: uuid("creator_id")
    .references(() => users.id)
    .notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  folderId: uuid("folder_id").references(() => folders.id),
  ...timestampFields,
});

export const folders = pgTable("folders", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  caption: varchar("caption", { length: 255 }),
  ...timestampFields,
});

export const permissions = pgTable("permissions", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
});

export const roles = pgTable("roles", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const rolePermissions = pgTable("role_permissions", {
  id: uuid().primaryKey().defaultRandom(),
  roleId: uuid("role_id").references(() => roles.id),
  permissionId: uuid("permission_id").references(() => permissions.id),
});

export const collaborators = pgTable("collaborators", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  noteId: uuid("note_id")
    .references(() => notes.id)
    .notNull(),
  roleId: uuid("role_id")
    .references(() => roles.id)
    .notNull(),
});

export type UserInsert = InferInsertModel<typeof users>;
export type NoteInsert = InferInsertModel<typeof notes>;
export type FolderInsert = InferInsertModel<typeof folders>;
export type PermissionInsert = InferInsertModel<typeof permissions>;
export type RoleInsert = InferInsertModel<typeof roles>;
export type RolePermissionInsert = InferInsertModel<typeof rolePermissions>;
export type CollaboratorInsert = InferInsertModel<typeof collaborators>;

export type UserSelect = InferSelectModel<typeof users>;
export type NoteSelect = InferSelectModel<typeof notes>;
export type FolderSelect = InferSelectModel<typeof folders>;
export type PermissionSelect = InferSelectModel<typeof permissions>;
export type RoleSelect = InferSelectModel<typeof roles>;
export type RolePermissionSelect = InferSelectModel<typeof rolePermissions>;
export type CollaboratorSelect = InferSelectModel<typeof collaborators>;
