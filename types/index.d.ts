/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};
declare type Circuit ={
  id:string ;
  libelle:string ;
  description?:string;
  $createdAt: string;
}
declare type Service = {
  id: string ;
  nomService : string ;
  description?: string ;
  abreviation?: string;
  adresseService?:string;
  $IdCircuit:string ;
}
declare type Statut ={
  id:string ;
  libelle:string ;
  $idService:string;
  $createdAt: string;
}

declare type TypeCourrier ={
  id:string ;
  libelle:string ;
  $idService:string ;
  $createdAt: string;
} 
declare type TypeContact =
  | "Email"
  | "SMS"
;

declare type TypeEntite = {
  id:string;
  libelle:string ;
  $createdAt: string;

} 
declare type Entite ={
  id:string ;
  libelle:string ;
  $idTypeEntite : string ;
  $createdAt: string;
} 
declare type SousEntite = {
  id:string ;
  libelle:string ;
  $idEntite: string ;
  $createdAt: string;
} 

declare type CourriersEntrant ={
  id: string; 
  numCourrier: string ; 
  objetCourrier:string; 
  dateCourrier: string; 
  reference: string;
  anneeCourrier:number;
  urgent:boolean;
  nombreAnnexe:number;
  documentUrl:string;
  dateReception:string;
  $idService:string
  $idStatut:string ; 
  $idprovenance:string; 
  $createdBy:string ;
  $typeCourrier:string;

  $createdAt: string;
} 

declare type CourriersOrientations = {
  id:string;
  $idCourrier:string; 
  annontation:string ; 
  dateOrientation:string;
  orientedBy: number;
  orientedTo: number;
  active:boolean;

}
declare type CourriersReceptionOrientations = {
  id:string;
  $idOrientation:string;
  dateReception:string;
  ReceptedBy:number;
} 

declare type CourriersProposition = {
  id:string;
  $idOrientation:string;
  dateProposition:string;
  annontation:string ; 
  resultatsEnSortie: string;
  proposedBy:number;
  active:boolean;
  proposition:number ;
} 
declare type DocumentProposition = {
  id:string ; 
  documentUrl: string;
  downloaded: boolean; 
  $idProposition:string;
}


declare type Sanction = {
  id:string;
  libelle:string; 
}
declare type CourriersTraites ={
  id:string;
  $idCourrier:string;
  dateTraitement:string;
  documentUrl?:string;
  traiteBy:number;
  annontation:string;
  resultats: string;
  $idsanction:string
} 

declare type Niveau={
  id:string;
  libelle:string
}
declare type Fonction = {
  id:string; 
  libelle:string;
  $idHierachique: string;
  abreviation?:string ;
  description?:string;
  $idService:string;
  codeStatut:string;
  codeReception:string;
  $idNiveau:string;

}
declare type Sanction ={
  id:string;
  libelle:string;
}
declare type Results = {
  id:string;
  nomResultat:string;
  $idService:string
} 
declare type typeCourriersSortants ={
  id:string;
  libelle:string; 
}
declare type CourriersSortants ={
  id:string; 
  numCourrier : string ;
  objetCourrier:string;
  reference:string;
  dateCourrier:string;
  anneeCourrier:number;
  urgent:boolean;
  nombreAnnexe:number;
  $idService:string
  $idStatut:string ; 
  $idDestinataire:string; 
  $createdBy:string ;
  $typeCourrier:string;
  dateOperationReception:string ; 
  statut: string;
  motif?:string;
  classification:string; 
  $createdAt: string;
}
declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  sharableId: string;
};

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  sharableId: string;
};

declare type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

declare type Category = "Food and Drink" | "Travel" | "Transfer";

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare type Receiver = {
  firstName: string;
  lastName: string;
};

declare type TransferParams = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};

declare type AddFundingSourceParams = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};

declare type NewDwollaCustomerParams = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

declare interface BankInfoProps {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface PageHeaderProps {
  topTitle: string;
  bottomTitle: string;
  topDescription: string;
  bottomDescription: string;
  connectBank?: boolean;
}

declare interface PaginationProps {
  page: number;
  totalPages: number;
}

declare interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

// declare type User = sdk.Models.Document & {
//   accountId: string;
//   email: string;
//   name: string;
//   items: string[];
//   accessToken: string;
//   image: string;
// };

declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

declare interface BankDropdownProps {
  accounts: Account[];
  setValue?: UseFormSetValue<any>;
  otherStyles?: string;
}

declare interface BankTabItemProps {
  account: Account;
  appwriteItemId?: string;
}

declare interface TotlCourriersBoxProps {
  courriers: CourriersEntrant[];
  totalCourriers: number;
  totalCourriersAreceptionner: number;
  totalCourriersATraiter: number;
}



declare interface FooterProps {
  user: User;
}

declare interface RightSidebarPropsOld {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}
declare interface RightSidebarProps {
  user: User;
  courriers: CourriersEntrant[];
  propositions: CourriersProposition[] & CourriersOrientations[];
}
declare interface SiderbarProps {
  user: User;
}

declare interface RecentTransactionsProps {
  accounts: Account[];
  transactions: Transaction[];
  appwriteItemId: string;
  page: number;
}

declare interface TransactionHistoryTableProps {
  transactions: Transaction[];
  page: number;
}

declare interface CategoryBadgeProps {
  category: string;
}

declare interface TransactionTableProps {
  transactions: Transaction[];
}

declare interface CategoryProps {
  category: CategoryCount;
}

declare interface DoughnutChartProps {
  courriers: CourriersEntrant[];
}

declare interface PaymentTransferFormProps {
  accounts: Account[];
}

// Actions
declare interface getAccountsProps {
  userId: string;
}

declare interface getAccountProps {
  appwriteItemId: string;
}

declare interface getInstitutionProps {
  institutionId: string;
}

declare interface getTransactionsProps {
  accessToken: string;
}

declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

declare interface CreateTransactionProps {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
}

declare interface getTransactionsByBankIdProps {
  bankId: string;
}

declare interface signInProps {
  email: string;
  password: string;
}

declare interface getUserInfoProps {
  userId: string;
}

declare interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}

declare interface createBankAccountProps {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  sharableId: string;
}

declare interface getBanksProps {
  userId: string;
}

declare interface getBankProps {
  documentId: string;
}

declare interface getBankByAccountIdProps {
  accountId: string;
}
