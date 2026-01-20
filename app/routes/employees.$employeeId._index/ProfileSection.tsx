import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Camera, Calendar, Mail, MapPin, DollarSign } from "lucide-react";
import type { EmployeeType } from "../employees._index/types";
import { formatDateEN, getAvatarPlaceholder } from "~/lib/utils";
import { Link } from "react-router";

type ProfileSectionProps = {
  employee: EmployeeType;
};

export default function ProfileSection({ employee }: ProfileSectionProps) {
  const { full_name, email, department, salary, job_title, start_date } =
    employee;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://bundui-images.netlify.app/avatars/08.png"
                alt="Profile"
              />
              <AvatarFallback className="text-2xl">
                {}
                {getAvatarPlaceholder(full_name)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold">{full_name}</h1>
              <Badge variant="secondary">{department}</Badge>
            </div>
            <p className="text-muted-foreground">{job_title}</p>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {email}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="size-4" />
                {salary}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />

                {formatDateEN(start_date)}
              </div>
            </div>
          </div>
          <Link to={`/employees/${employee.id}/edit`}>
            <Button variant="default">Edit Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
