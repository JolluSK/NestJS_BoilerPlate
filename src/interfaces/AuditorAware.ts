export interface AuditorAware {
  createdBy: string;
  updateBy: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: number;
  isDeleted: number;
}