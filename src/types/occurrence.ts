export interface Occurrence {
  id: string;
  type: string;
  address: string;
  district: string;
  city: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignedTo: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  images?: string[];
  signature?: string;
}

export interface OccurrenceFormData {
  type: string;
  address: string;
  district: string;
  city: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
