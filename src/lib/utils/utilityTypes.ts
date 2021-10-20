import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootDrawerParamList, RootStackParamList } from "../../navigation";

/**
 * Makes a CompositeScreenProps for the Drawer Screens
 * 
 * @param S The name of the current screen
 */
type AppDrawerScreenProps<S extends keyof RootDrawerParamList> = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, S>,
  NativeStackScreenProps<RootStackParamList>
>

/**
 * Makes a NativeStackScreenProps for the Stack Screens
 * 
 * @param S The name of the current screen
 */
type AppStackScreenProps<S extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, S>

/**
 * Makes an AppDrawerScreenProps and adds custom Props to it
 * 
 * @param S The name of the current screen
 * @param P The custom props you want
 */
type ADSwithProps<S extends keyof RootDrawerParamList, P extends {}> = AppDrawerScreenProps<S> & P

/**
 * Makes an AppStackScreenProps and adds custom Props to it
 * 
 * @param S The name of the current screen
 * @param P The custom props you want
 */
type ASSwithProps<S extends keyof RootStackParamList, P extends {}> = AppStackScreenProps<S> & P

export type { AppDrawerScreenProps, AppStackScreenProps, ADSwithProps, ASSwithProps }