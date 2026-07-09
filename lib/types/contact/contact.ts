export type ServiceType =
    | "tehnoredactare"
    | "design-coperta"
    | "redactare"
    | "corectura"

export interface ContactInfo {
    name: string;
    email: string;
    service: ServiceType;
    message: string;
}