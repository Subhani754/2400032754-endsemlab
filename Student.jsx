import Image from "next/image";

export default function Home() {
  // JSON object for student details
  const student = {
    name: "John Doe",
    rollNumber: "12345",
    department: "Computer Science"
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://picsum.photos/150/150"
            alt="Student Profile"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        {/* Student Details */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Student Details</h1>
          <div className="space-y-2">
            <p className="text-lg"><strong>Name:</strong> {student.name}</p>
            <p className="text-lg"><strong>Roll Number:</strong> {student.rollNumber}</p>
            <p className="text-lg"><strong>Department:</strong> {student.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
