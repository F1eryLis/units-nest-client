export type Company = {
    id: number;
    name: string;
    companyLimit: number;
    dayLimit: number;
    status: number;
    startTime: Date;
    endTime: Date;
    days: number[];
    reaction: number[];
    soundFileId: number;
    phoneListId: number;
    userId: number;
}

export type SoundFile = {
    id: number;
    name: string;
    filePath: string;
    userId: number;
}

export type PhoneList = {
    id: number;
    name: string;
    phones: number[];
    userId: number;
}