"use client";

import { Trash } from "lucide-react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

interface DeleteProps {
  item: string;
  id: string;
}

const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      const itemType = item === "product" ? "products" : "collections";
      const res = await fetch(`/api/${itemType}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setLoading(false);
        window.location.href = `/${itemType}`;
        toast.success(`${item} Supprimer`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Quelque chose s'est mal passé ! Veuillez réessayer.");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className='bg-red-1 text-white'>
          <Trash className='h-4 w-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-white text-grey-1'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-red-1'>
            Supprimer definitivement?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. Cela supprimera définitivement votre
            {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-red-1 text-white' onClick={onDelete}>
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
